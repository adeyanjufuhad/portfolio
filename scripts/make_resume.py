"""Rebuild the portfolio resume PDF (public/resume.pdf and public/Adeyanju_Fuhad_Resume.pdf).

A one-page, ATS-friendly A4 layout: single column, standard section names, real text (no icon fonts),
dates right-aligned so a recruiter can skim roles in seconds.
Content is read from the resume section of src/data/portfolioData.js, so the PDF and the /resume page stay in sync.
Usage: python scripts/make_resume.py public/resume.pdf && cp public/resume.pdf public/Adeyanju_Fuhad_Resume.pdf
Requires: pip install reportlab, and Node.js on the PATH.
"""
import json
import subprocess
import sys
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

OUT = sys.argv[1]
ROOT = Path(__file__).resolve().parent.parent
R = json.loads(subprocess.run(
    ["node", "--input-type=module", "-e",
     "const { portfolioData } = await import(process.argv[1]); console.log(JSON.stringify(portfolioData.resume));",
     (ROOT / "src" / "data" / "portfolioData.js").as_uri()],
    check=True, capture_output=True, text=True, encoding="utf-8").stdout)

NAVY = HexColor("#111827")
BLUE = HexColor("#1d4ed8")
BODY = HexColor("#1f2937")
MUTED = HexColor("#4b5563")
RULE = HexColor("#cbd5e1")

MARGIN_X = 40
MARGIN_Y = 32
# The page frame keeps 6pt of padding on each side.
WIDTH = A4[0] - 2 * MARGIN_X - 12

S = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=20, leading=23, textColor=NAVY, alignment=TA_CENTER),
    "headline": ParagraphStyle("headline", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=BLUE, alignment=TA_CENTER),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8, leading=11, textColor=BODY, alignment=TA_CENTER),
    "openTo": ParagraphStyle("openTo", fontName="Helvetica-Oblique", fontSize=7.8, leading=10.5, textColor=MUTED, alignment=TA_CENTER),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=BLUE),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=8.3, leading=11.2, textColor=BODY),
    "skillLabel": ParagraphStyle("skillLabel", fontName="Helvetica-Bold", fontSize=8, leading=10.5, textColor=NAVY),
    "skillValue": ParagraphStyle("skillValue", fontName="Helvetica", fontSize=8, leading=10.5, textColor=BODY),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=9, leading=11.5, textColor=NAVY),
    "right": ParagraphStyle("right", fontName="Helvetica-Bold", fontSize=8, leading=11.5, textColor=NAVY, alignment=TA_RIGHT),
    "meta": ParagraphStyle("meta", fontName="Helvetica-Oblique", fontSize=7.8, leading=10, textColor=MUTED),
    "metaRight": ParagraphStyle("metaRight", fontName="Helvetica", fontSize=7.8, leading=10, textColor=BLUE, alignment=TA_RIGHT),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=8.2, leading=10.9, textColor=BODY,
                             leftIndent=10, firstLineIndent=-8, spaceBefore=1.4),
}


def esc(t):
    # Helvetica has no naira glyph, so spell the currency out.
    t = t.replace("₦", "NGN ")
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def link(url, text):
    return f'<a href="{url}" color="#1d4ed8">{esc(text)}</a>'


def bare(url):
    return url.replace("https://", "").replace("http://", "").rstrip("/")


def section(title):
    return [Spacer(1, 6), Paragraph(title, S["section"]),
            HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=2, spaceAfter=4)]


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
    return Paragraph(f"&#8226;&nbsp;&nbsp;{esc(text)}", S["bullet"])


story = [
    Paragraph(esc(R["name"]), S["name"]),
    Spacer(1, 2),
    Paragraph(esc(R["headline"]), S["headline"]),
    Spacer(1, 3),
    Paragraph(" &nbsp;|&nbsp; ".join([
        esc(R["location"]), esc(R["phone"]), link("mailto:" + R["email"], R["email"]),
    ]), S["contact"]),
    Paragraph(" &nbsp;|&nbsp; ".join([
        "Portfolio: " + link(R["portfolioUrl"], R["portfolio"]),
        "GitHub: " + link(R["githubUrl"], R["github"]),
        "LinkedIn: " + link(R["linkedinUrl"], R["linkedin"]),
    ]), S["contact"]),
    Spacer(1, 2),
    Paragraph(esc(R["openTo"]), S["openTo"]),
]

story += section("SUMMARY") + [Paragraph(esc(R["summary"]), S["body"])]

story += section("SKILLS")
skills = Table([[Paragraph(esc(g["category"]), S["skillLabel"]), Paragraph(esc(", ".join(g["skills"])), S["skillValue"])]
                for g in R["technicalSkills"]], colWidths=[92, WIDTH - 92])
skills.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 0.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
]))
story.append(skills)

story += section("EXPERIENCE")
for e in R["experience"]:
    if e.get("url"):
        head = [row(f'{esc(e["role"])}, {esc(e["company"])}', esc(e["period"]), "title", "right"),
                row(f'{esc(e["tagline"])} · {esc(e["location"])}', link(e["url"], bare(e["url"])), "meta", "metaRight", 170)]
    else:
        head = [row(f'{esc(e["role"])}, {esc(e["company"])} <font name="Helvetica-Oblique" color="#4b5563">· {esc(e["location"])}</font>',
                    esc(e["period"]), "title", "right")]
    block = head + [bullet(h) for h in e["highlights"]]
    story += [KeepTogether(block), Spacer(1, 4)]

story += section("PROJECTS")
for p in R["projects"]:
    title, _, subtitle = p["title"].partition(" — ")
    links = link(p["liveUrl"], "Live") + " &nbsp;·&nbsp; " + link(p["githubUrl"], "Code")
    block = [
        row(f'{esc(title)} <font name="Helvetica" color="#4b5563">— {esc(subtitle)}</font>', links, "title", "metaRight", 80),
        Paragraph(esc(p["stack"]), S["meta"]),
    ] + [bullet(h) for h in p["highlights"]]
    story += [KeepTogether(block), Spacer(1, 3.5)]

story += section("ACHIEVEMENTS")
for a in R["achievements"]:
    story.append(row(f'{esc(a["title"])} <font name="Helvetica" color="#4b5563">— {esc(a["issuer"])}</font>',
                     esc(a["year"]), "body", "right", 40))
    story.append(Spacer(1, 1.5))

story += section("EDUCATION")
for ed in R["education"]:
    story.append(row(f'{esc(ed["degree"])}, {esc(ed["institution"])}', esc(ed["period"]), "title", "right"))
for c in R["certifications"]:
    name, _, year = c["name"].rpartition(", ")
    story.append(Spacer(1, 2))
    story.append(row(f'{esc(name)} <font name="Helvetica" color="#4b5563">— {esc(c["issuer"])}</font>',
                     esc(year), "body", "right", 40))

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=MARGIN_X, rightMargin=MARGIN_X,
                        topMargin=MARGIN_Y, bottomMargin=MARGIN_Y,
                        title="Adeyanju Fuhad — Full Stack Developer Resume", author="Adeyanju Fuhad",
                        subject="Full Stack Developer Resume",
                        keywords="Full Stack Developer, React, Next.js, Node.js, TypeScript, Python, FastAPI, Flutter, PostgreSQL")
doc.build(story)
