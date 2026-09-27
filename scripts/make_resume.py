"""Rebuild the portfolio resume PDF (public/resume.pdf and public/Adeyanju_Fuhad_Resume.pdf).

Layout matches the previous ReportLab resume: A4, Helvetica, navy name, blue section headings.
Usage: python scripts/make_resume.py public/resume.pdf && cp public/resume.pdf public/Adeyanju_Fuhad_Resume.pdf
Requires: pip install reportlab. Keep the text in sync with the resume section of src/data/portfolioData.js.
"""
import sys
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
    return t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def section(title):
    return [Spacer(1, 12), Paragraph(title, S["section"]), Spacer(1, 3),
            HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=0, spaceAfter=6, lineCap="round")]


def bullet(text, style="bullet"):
    return Paragraph(f"{BULLET} {esc(text)}", S[style])


SUMMARY = (
    "Fullstack developer with hands-on experience shipping production web and mobile applications across frontend "
    "and backend stacks. Completed internships at Arrowstack and Oasis, delivering three live products — Blaze, "
    "Kuza, and Trackr. Built FastTrack, a Flutter and Neon loan pre-qualification app for Nigerian lenders that pairs "
    "Gemini document extraction with a deterministic rules engine, and CheckAm, a free scam checker for Nigerian "
    "messages and links that explains its findings in English and Pidgin. Co-founded TaxBridge, Nigeria's AI-powered "
    "tax compliance middleware platform, serving as ML Engineer and Infrastructure Lead. Trained at Nupat Technologies "
    "(Best Graduating Student). Currently pursuing a B.Sc. in Computer Engineering at Obafemi Awolowo University."
)

SKILLS = [
    ("Frontend", "React, Next.js, JavaScript / TypeScript, HTML5 / CSS3, Tailwind CSS, shadcn/ui, React Native / Expo, Flutter / Dart"),
    ("Backend", "Python / FastAPI, Node.js / Express, REST APIs, PostgreSQL, Neon (Postgres, Auth, Storage, Functions), Supabase, MongoDB"),
    ("Tools", "Git / GitHub, GitHub Actions CI/CD, Google Gemini API, Vercel, Render, EAS Build, Socket.io, Paystack, OPay, Razorpay, Cloudinary, node-cron"),
    ("Concepts", "JWT Authentication, Real-time Systems, Admin Dashboards, Responsive Design, WCAG Accessibility"),
]

EXPERIENCE = [
    ("TaxBridge — Co-founder, ML Engineer & Infrastructure Lead",
     "Lagos, Nigeria · 2026 – Present · AI-powered Tax Compliance Middleware",
     ["Architecting Nigeria's first AI-powered tax compliance middleware platform integrating with FIRS data systems.",
      "Leading ML pipeline design and cloud infrastructure for automated VAT, WHT, and CIT reconciliation.",
      "Building FastAPI microservices backend and React dashboard for real-time compliance monitoring."]),
    ("Arrowstack — Frontend Developer Intern",
     "Remote · 2026 · Product Internship",
     ["Delivered Kuza (Next.js e-commerce storefront) with WCAG-compliant accessibility and persistent cart logic.",
      "Built Trackr, a real-time logistics dashboard with Recharts analytics, sort/filter/pagination, and alerts centre."]),
    ("Oasis — Fullstack Developer Intern",
     "Remote · 2026 · Product Internship",
     ["Shipped Blaze, a full-stack pizza ordering platform with real-time order tracking via Socket.io and Razorpay payments.",
      "Implemented JWT auth flow with email verification, password reset, Cloudinary image uploads, and admin inventory dashboard."]),
]

PROJECTS = [
    ("CheckAm — Scam Checker for Nigerian Messages & Links", "https://check-am-five.vercel.app/",
     "JavaScript · PWA · Tesseract.js · Cloudflare Pages / Vercel Functions · Groq · Workers AI | 2026",
     ["Installable, framework-free web app that checks pasted messages, screenshots and links for Nigerian scam patterns and explains every finding in English or Nigerian Pidgin.",
      "On-device rules engine (31 scam-script rules, 59 official organisations for lookalike-domain detection) keeps messages private; only links go to a serverless checker for domain age, Safe Browsing, URLhaus and short-link expansion.",
      "Optional AI check (Groq with Cloudflare Workers AI fallback) guarded so it can only raise a warning, never say \"safe\"; 108 tests including a corpus of 44 real-world scam types."]),
    ("FastTrack — Digital Onboarding & Loan Pre-qualification", "https://fastrack.name.ng/",
     "Flutter · Dart · Neon (Postgres, Auth, Storage, Functions) · Node.js / TypeScript · Gemini · GitHub Actions | 2026",
     ["Five-minute applicant flow (sandbox BVN/NIN check, ID and statement upload or bank-SMS paste, e-signature) that returns a pre-qualified amount and tier; officer dashboard with a scored file and approve / more-info / decline actions.",
      "Gemini extracts income and spending from documents while a deterministic rules engine sets the amount, so the AI never decides; a model-fallback chain keeps scoring up, with results in about 3 seconds.",
      "Neon backend with server-side access rules, Ed25519 JWT verification and private storage behind 10-minute presigned links; 97 tests and CI/CD that ships GitHub Pages, the Android APK and the Neon Function."]),
    ("Blaze — Pizza Ordering & Delivery Platform", "https://client-ten-psi-50.vercel.app/",
     "React · Node.js · Express · MongoDB · Socket.io · Razorpay | Oasis Internship",
     ["Full-stack food ordering platform with a 4-step custom pizza builder and real-time order status tracking via Socket.io.",
      "Integrated Razorpay payments, JWT auth with email verification and password reset, and Cloudinary image uploads.",
      "Admin dashboard with inventory management and automated low-stock email alerts via node-cron."]),
    ("Kuza — Streetwear E-Commerce Storefront", "https://kuza-store.vercel.app/",
     "Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui | Arrowstack Internship",
     ["Accessible e-commerce storefront with product filters, sort, persistent cart via Context API, and full checkout flow.",
      "WCAG-compliant keyboard navigation, responsive mobile layout, and complete loading/error/empty state handling."]),
    ("Trackr — Logistics Operations Dashboard", "https://trackr-chi-eight.vercel.app/",
     "React 18 · TypeScript · Tailwind CSS · Recharts · shadcn/ui | Arrowstack Internship",
     ["Real-time logistics dashboard for tracking shipments, drivers, and KPIs with trend indicators.",
      "Shipments table with sort, filter, and pagination; line and bar charts for delivery analytics via Recharts.",
      "Alerts centre with Critical/Warning/Info severity levels, drivers overview, and collapsible responsive sidebar."]),
    ("AgroFinis — Agritech Platform", "https://agrofinis.com.ng/",
     "React · Supabase · FastAPI | 2026 – Present",
     ["Real-time weather data, AI crop advisory, and commodity market listings for Nigerian farmers.",
      "Listed on Orynth (Solana-based product discovery) under ticker AGRF; live at agrofinis.com.ng."]),
    ("Luxe Estate — UK Luxury Real Estate Portal", "https://luxe-estate-ymo2.vercel.app/",
     "React · Node.js · MongoDB · Tailwind CSS | 2026",
     ["Full-stack luxury property listing portal for the UK market with property search, filters, and detailed listing views.",
      "Built a Node.js / MongoDB backend for property data management with a fully responsive React frontend."]),
]

ACHIEVEMENTS = [
    "Best Graduating Student — Nupat Technologies Fullstack Training Programme.",
    "Qualified for Hackaholics 7.0 — Wema Bank hackathon, Grand Pitch Day at YABATECH, Lagos (2026).",
]


def link(url, text):
    return f'<a href="{url}" color="#2563eb">{text}</a>'


story = [
    Paragraph("Adeyanju Fuhad", S["name"]),
    Paragraph(esc("Fullstack Developer — React · Next.js · Node.js · TypeScript · Python · Flutter"), S["headline"]),
    Spacer(1, 3),
    Paragraph(
        "Lagos, Nigeria · " + link("https://github.com/adeyanjufuhad", "github.com/adeyanjufuhad")
        + " · " + link("https://linkedin.com/in/adeyanjufuhad", "linkedin.com/in/adeyanjufuhad")
        + " · " + link("mailto:adeyanjufuhad@gmail.com", "adeyanjufuhad@gmail.com")
        + " · 07049294736", S["contact"]),
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

story += section("PROJECTS")
for title, url, stack, points in PROJECTS:
    head = Table([[Paragraph(esc(title), S["title"]),
                   Paragraph(link(url, '<font name="ZapfDingbats" size="6">n</font> Live'), S["live"])]],
                 colWidths=[width - 60, 60])
    head.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(KeepTogether([head, Paragraph(esc(stack), S["stack"])] + [bullet(p) for p in points]))
    story.append(Spacer(1, 6))

story += section("ACHIEVEMENTS") + [bullet(a, "achievement") for a in ACHIEVEMENTS]

story += section("EDUCATION") + [
    Paragraph("Obafemi Awolowo University (OAU), Ile-Ife", S["title"]),
    Paragraph("B.Sc. Computer Engineering · In Progress", S["meta"]),
]

story += section("CERTIFICATIONS") + [
    Paragraph(esc("Fullstack Developer Training — Nupat Technologies, 2024 (Best Graduating Student)"), S["plain"]),
]

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=57.6, rightMargin=57.6, topMargin=48, bottomMargin=48,
                        title="Adeyanju Fuhad — Resume", author="Adeyanju Fuhad",
                        subject="Fullstack Developer Resume")
doc.build(story)
