"""Rebuild the portfolio resume PDF (public/resume.pdf and public/Adeyanju_Fuhad_Resume.pdf).

Layout matches the previous ReportLab resume: A4, Helvetica, navy name, blue section headings.
Content is read from the resume section of src/data/portfolioData.js, so the PDF and the /resume page stay in sync.
Usage: python scripts/make_resume.py public/resume.pdf && cp public/resume.pdf public/Adeyanju_Fuhad_Resume.pdf
Requires: pip install reportlab, and Node.js on the PATH.
"""
import json
import subprocess
import sys
from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
                                HRFlowable, KeepTogether)

OUT = sys.argv[1]
BULLET = "•"

NAVY = HexColor("#1a1a2e")
BLUE = HexColor("#2563eb")
BODY = HexColor("#374151")
MUTED = HexColor("#6b7280")
RULE = HexColor("#dbeafe")

S = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=NAVY),
    "headline": ParagraphStyle("headline", fontName="Helvetica", fontSize=9.5, leading=13, textColor=BLUE),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8, leading=12, textColor=BODY),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=BLUE),
    "summary": ParagraphStyle("summary", fontName="Helvetica", fontSize=8, leading=12, textColor=BODY),
    "skillLabel": ParagraphStyle("skillLabel", fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=NAVY),
    "skillValue": ParagraphStyle("skillValue", fontName="Helvetica", fontSize=7.5, leading=11, textColor=BODY),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=NAVY),
    "meta": ParagraphStyle("meta", fontName="Helvetica-Oblique", fontSize=7.5, leading=10, textColor=MUTED, spaceAfter=3),
    "stack": ParagraphStyle("stack", fontName="Helvetica", fontSize=7, leading=10, textColor=MUTED, spaceAfter=3),
    "live": ParagraphStyle("live", fontName="Helvetica", fontSize=7.5, leading=12, textColor=BLUE, alignment=TA_RIGHT),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=8, leading=12, textColor=BODY,
                             leftIndent=11, firstLineIndent=-11, spaceBefore=2.5, spaceAfter=1.5),
    "achievement": ParagraphStyle("achievement", parent=None, fontName="Helvetica", fontSize=8, leading=12, textColor=BODY,
                                  leftIndent=11, firstLineIndent=-11, spaceBefore=2.5, spaceAfter=2.5),
    "plain": ParagraphStyle("plain", fontName="Helvetica", fontSize=8, leading=12, textColor=BODY),
}


def esc(t):
    # Helvetica has no naira glyph, so spell the currency out.
    t = t.replace("₦", "NGN ")
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def section(title):
    return [Spacer(1, 12), Paragraph(title, S["section"]), Spacer(1, 3),
            HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=0, spaceAfter=6, lineCap="round")]


def bullet(text, style="bullet"):
    return Paragraph(f"{BULLET} {esc(text)}", S[style])


ROOT = Path(__file__).resolve().parent.parent
R = json.loads(subprocess.run(
    ["node", "--input-type=module", "-e",
     "const { portfolioData } = await import(process.argv[1]); console.log(JSON.stringify(portfolioData.resume));",
     (ROOT / "src" / "data" / "portfolioData.js").as_uri()],
    check=True, capture_output=True, text=True, encoding="utf-8").stdout)

SUMMARY = R["summary"]
SKILLS = [(g["category"], ", ".join(g["skills"])) for g in R["technicalSkills"]]
EXPERIENCE = [(f'{e["company"]} — {e["role"]}', f'{e["location"]} · {e["period"]} · {e["tagline"]}', e["highlights"])
              for e in R["experience"]]
PROJECTS = [(p["title"], p["liveUrl"], p["stack"], p["highlights"]) for p in R["projects"]]
ACHIEVEMENTS = [f'{a["title"]} — {a["issuer"]} ({a["year"]}).' for a in R["achievements"]]


def link(url, text):
    return f'<a href="{url}" color="#2563eb">{text}</a>'


story = [
    Paragraph(esc(R["name"]), S["name"]),
    Paragraph(esc(R["headline"]), S["headline"]),
    Spacer(1, 3),
    Paragraph(
        esc(R["location"]) + " · " + link(R["githubUrl"], R["github"])
        + " · " + link(R["linkedinUrl"], R["linkedin"])
        + " · " + link("mailto:" + R["email"], R["email"])
        + " · " + esc(R["phone"]), S["contact"]),
    HRFlowable(width="100%", thickness=0.8, color=NAVY, spaceBefore=8, spaceAfter=4, lineCap="round"),
]

story += section("PROFESSIONAL SUMMARY") + [Paragraph(esc(SUMMARY), S["summary"])]

story += section("TECHNICAL SKILLS")
width = A4[0] - 2 * 57.6 - 12
skills = Table([[Paragraph(k, S["skillLabel"]), Paragraph(esc(v), S["skillValue"])] for k, v in SKILLS],
               colWidths=[74, width - 74])
skills.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5),
]))
story.append(skills)

story += section("EXPERIENCE")
for title, meta, points in EXPERIENCE:
    story.append(KeepTogether([Paragraph(esc(title), S["title"]), Paragraph(esc(meta), S["meta"])]
                              + [bullet(p) for p in points]))
    story.append(Spacer(1, 6))

heading = section("PROJECTS")
for title, url, stack, points in PROJECTS:
    head = Table([[Paragraph(esc(title), S["title"]),
                   Paragraph(link(url, '<font name="ZapfDingbats" size="6">n</font> Live'), S["live"])]],
                 colWidths=[width - 60, 60])
    head.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    # The section heading travels with the first project so it never sits alone at a page bottom.
    story.append(KeepTogether(heading + [head, Paragraph(esc(stack), S["stack"])] + [bullet(p) for p in points]))
    heading = []
    story.append(Spacer(1, 6))

story += section("ACHIEVEMENTS") + [bullet(a, "achievement") for a in ACHIEVEMENTS]

story += section("EDUCATION")
for ed in R["education"]:
    story += [Paragraph(esc(ed["institution"]), S["title"]), Paragraph(esc(f'{ed["degree"]} · {ed["period"]}'), S["meta"])]

story += section("CERTIFICATIONS") + [
    Paragraph(esc(f'{c["name"]} ({c["issuer"]})'), S["plain"]) for c in R["certifications"]
]

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=57.6, rightMargin=57.6, topMargin=48, bottomMargin=48,
                        title="Adeyanju Fuhad — Resume", author="Adeyanju Fuhad",
                        subject="Full Stack Developer & Founder Resume")
doc.build(story)
