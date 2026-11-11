"""Rebuild the portfolio resume PDF (public/resume.pdf and public/Adeyanju_Fuhad_Resume.pdf).

A one-page, ATS-friendly A4 layout in the classic LaTeX resume style: Computer Modern (CMU Serif), black on white,
small-caps section titles over a full-width rule, bold titles with right-aligned dates and italic sub-lines.
Content is read from the resume section of src/data/portfolioData.js, so the PDF and the /resume page stay in sync.
Usage: python scripts/make_resume.py public/resume.pdf && cp public/resume.pdf public/Adeyanju_Fuhad_Resume.pdf
Requires: pip install reportlab, and Node.js on the PATH. Fonts live in scripts/fonts (SIL OFL, see OFL.txt).
"""
import json
import subprocess
import sys
from pathlib import Path

from reportlab.lib.colors import black
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

OUT = sys.argv[1]
ROOT = Path(__file__).resolve().parent.parent
R = json.loads(subprocess.run(
    ["node", "--input-type=module", "-e",
     "const { portfolioData } = await import(process.argv[1]); console.log(JSON.stringify(portfolioData.resume));",
     (ROOT / "src" / "data" / "portfolioData.js").as_uri()],
    check=True, capture_output=True, text=True, encoding="utf-8").stdout)

# Computer Modern Unicode Serif, the default LaTeX typeface.
FONTS = ROOT / "scripts" / "fonts"
for name, file in [("CM", "500-roman"), ("CM-Bold", "700-roman"), ("CM-Italic", "500-italic"), ("CM-BoldItalic", "700-italic")]:
    pdfmetrics.registerFont(TTFont(name, str(FONTS / f"cmu-serif-{file}.ttf")))
pdfmetrics.registerFontFamily("CM", normal="CM", bold="CM-Bold", italic="CM-Italic", boldItalic="CM-BoldItalic")

MARGIN_X = 30
MARGIN_Y = 26
# The page frame keeps 6pt of padding on each side.
WIDTH = A4[0] - 2 * MARGIN_X - 12

BODY = 8.7


def style(name, font="CM", size=BODY, leading=None, align=0, **kw):
    return ParagraphStyle(name, fontName=font, fontSize=size, leading=leading or size * 1.22,
                          textColor=black, alignment=align, **kw)


S = {
    "name": style("name", "CM-Bold", 16, 19, TA_CENTER),
    "headline": style("headline", size=9.5, leading=11.5, align=TA_CENTER),
    "contact": style("contact", size=8, leading=9.8, align=TA_CENTER),
    "body": style("body"),
    "title": style("title", "CM-Bold", 9.3, 11),
    "right": style("right", size=8.7, leading=11, align=TA_RIGHT),
    "sub": style("sub", "CM-Italic", 8.4, 10.2),
    "subRight": style("subRight", "CM-Italic", 8.4, 10.2, TA_RIGHT),
    "bullet": style("bullet", leading=10.3, leftIndent=17, firstLineIndent=-8, spaceBefore=0.3),
}


def esc(t):
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def link(url, text):
    # Links stay black like the rest of the page; they are still clickable.
    return f'<a href="{url}">{esc(text)}</a>'


def bare(url):
    return url.replace("https://", "").replace("http://", "").replace("www.", "").rstrip("/")


def small_caps(title, big=11, small=8.8):
    # Fake LaTeX \\scshape: capital first letters, smaller capitals for the rest.
    words = []
    for w in title.split(" "):
        words.append(f'<font size="{big}">{esc(w[0].upper())}</font><font size="{small}">{esc(w[1:].upper())}</font>')
    return " ".join(words)


def section(title):
    return [Spacer(1, 4), Paragraph(small_caps(title), style("section", size=11, leading=12.5)),
            HRFlowable(width="100%", thickness=0.5, color=black, spaceBefore=0.5, spaceAfter=3)]


def row(left, right, left_style, right_style, right_width=150):
    t = Table([[Paragraph(left, S[left_style]), Paragraph(right, S[right_style])]],
              colWidths=[WIDTH - right_width, right_width])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t


def bullet(text):
    return Paragraph(f"&#8226;&nbsp;&nbsp;{text}", S["bullet"])


story = [
    Paragraph(esc(R["name"].upper()), S["name"]),
    Spacer(1, 1),
    Paragraph(esc(R["headline"]), S["headline"]),
    Spacer(1, 1),
    Paragraph(" &nbsp;&#8226;&nbsp; ".join([
        esc(R["location"]), esc(R["phone"]), link("mailto:" + R["email"], R["email"]),
    ]), S["contact"]),
    Paragraph(" &nbsp;&#8226;&nbsp; ".join([
        link(R["portfolioUrl"], R["portfolio"]), link(R["githubUrl"], R["github"]), link(R["linkedinUrl"], R["linkedin"]),
    ]), S["contact"]),
    Paragraph(f'<i>{esc(R["openTo"])}</i>', S["contact"]),
]

story += section("Professional Summary") + [Paragraph(esc(R["summary"]), S["body"])]

story += section("Technical Skills")
for g in R["technicalSkills"]:
    story.append(bullet(f'<b>{esc(g["category"])}:</b> {esc(", ".join(g["skills"]))}'))

story += section("Professional Experience")
for e in R["experience"]:
    company = link(e["url"], e["company"]) if e.get("url") else esc(e["company"])
    block = [
        row(esc(e["role"]), esc(e["period"]), "title", "right", 110),
        row(f'{company} — {esc(e["tagline"])}', esc(e["location"]), "sub", "subRight", 110),
    ] + [bullet(esc(h)) for h in e["highlights"]]
    story += [KeepTogether(block), Spacer(1, 2.5)]

story += section("Featured Projects")
for p in R["projects"]:
    title, _, subtitle = p["title"].partition(" — ")
    links = link(p["liveUrl"], "Live") + " | " + link(p["githubUrl"], "Code")
    block = [
        row(f'{esc(title)}: <font name="CM">{esc(subtitle)}</font>', links, "title", "subRight", 70),
        Paragraph(f'<i>{esc(p["stack"])}</i>', S["sub"]),
    ] + [bullet(esc(h)) for h in p["highlights"]]
    story += [KeepTogether(block), Spacer(1, 2.5)]

story += section("Awards & Recognition")
for a in R["achievements"]:
    story.append(row(f'<b>{esc(a["title"])}</b> — {esc(a["issuer"])}', f'<i>{esc(a["year"])}</i>', "body", "right", 40))
    story.append(Spacer(1, 1))

story += section("Education")
for ed in R["education"]:
    story.append(row(f'<b>{esc(ed["degree"])}</b> &#8226; {esc(ed["institution"])}', f'<i>{esc(ed["period"])}</i>',
                     "body", "right", 110))
for c in R["certifications"]:
    name, _, year = c["name"].rpartition(", ")
    story.append(Spacer(1, 1))
    story.append(row(f'<b>{esc(name)}</b> &#8226; {esc(c["issuer"])}', f'<i>{esc(year)}</i>', "body", "right", 40))

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=MARGIN_X, rightMargin=MARGIN_X,
                        topMargin=MARGIN_Y, bottomMargin=MARGIN_Y,
                        title="Adeyanju Fuhad — Full Stack Developer Resume", author="Adeyanju Fuhad",
                        subject="Full Stack Developer Resume",
                        keywords="Full Stack Developer, React, Next.js, Node.js, TypeScript, Python, FastAPI, Flutter, PostgreSQL")
doc.build(story)
print("pages:", doc.page)
