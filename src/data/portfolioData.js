import { recentProjects } from './recentProjects.js';

export const portfolioData = {
  name: "Adeyanju Fuhad",
  role: "Full Stack Developer",
  status: "Open to new builds",
  location: "Lagos, Nigeria",
  seo_title: "Adeyanju Fuhad – Full Stack Developer · Portfolio",
  seo_description: "Fuhad Adeyanju: full stack developer and founder of Sova and Edify. I build the button and the thing the button talks to.",
  hero: {
    nameDisplay: "FUHAD",
    label: "my name is",
    status: "Open to new builds",
    location: "Lagos, Nigeria",
    role: "Full Stack Developer",
    media: [
      { src: "/images/fuhad-professional.jpg" },
      { src: "/images/fuhad-event.jpg" }
    ],
    notes: [
      { text: "Full Stack Developer", color: "var(--ca-purple)" },
      { text: "Lagos, Nigeria", color: "var(--ca-yellow-soft)" }
    ],
    title: "I build things that actually work.",
    ctaPrimary: "Contact me"
  },
  bio: {
    label: "about me!",
    title: "About",
    badge: "what's up",
    portrait: {
      src: "/images/fuhad-professional.jpg",
      alt: "Fuhad Adeyanju in a black kaftan with gold embroidery and a fila"
    },
    photo: [
      {
        src: "/images/fuhad-professional.jpg",
        caption: "Fuhad, founder of Sova & Edify"
      },
      {
        src: "/images/fuhad-event.jpg",
        caption: "2026 at OAU GDG build with AI"
      },
      {
        src: "/images/fuhad-portrait.jpg",
        caption: "late night builds"
      },
      {
        src: "/projects/recent/sova.webp",
        caption: "Sova · Hacktober 2026"
      },
      {
        src: "/projects/recent/edify.webp",
        caption: "Edify · SS1–SS3 prep"
      },
      {
        src: "/projects/checkam-home.jpg",
        caption: "CheckAm"
      },
      {
        src: "/projects/fasttrack-result.jpg",
        caption: "FastTrack"
      }
    ],
    body: "I build the button and the thing the button talks to. Full stack developer and founder, shipping web and mobile products for problems I can see from my own street.",
    cardLabel: "Main bio",
    story: "I'm Fuhad, a full stack developer and Computer Engineering student at Obafemi Awolowo University. I build for web and mobile, and I take product quality personally: clean UI, solid architecture, and code that actually ships.\n\nI learnt the craft properly at Nupat Technologies, where I finished as Best Graduating Student in 2024. Internships at Arrowstack and Oasis came next, and that's where Kuza, Trackr and Blaze went from tickets to production on real deadlines.\n\nMost of what I build now starts with something broken around me. Savings circles that run on memory and trust became Sova. Students guessing what to study this week became Edify. Scam messages forwarded into family group chats became CheckAm. Lenders retyping bank statements became FastTrack.\n\nI'm the founder of Sova and Edify, and I'm still the one writing the code, from the Postgres triggers to the last button state. Sova got me shortlisted as one of 30 developers selected to compete in Devcenter Hacktober 2026.\n\nIf you need someone who can own a feature end to end and talk clearly about it while doing it, that's me.",
    callout: "Right now: building Sova and Edify, and open to full-time roles, freelance, contracts and collaborations.",
    note: "When I'm not shipping, you'll find me at GDG OAU events like Build with AI 2026, reading about how systems fail, or redesigning something that already works because it could feel better.",
    storyLabel: "Principles",
    principles: [
      {
        title: "Ship it, then sharpen it",
        body: "Code sitting in a branch helps nobody. I get a working version in front of real people early, then tighten it based on what they actually do, not what I guessed they would.",
        note: "shipped beats perfect",
        color: "var(--ca-cyan)",
        rotate: "-rotate-1"
      },
      {
        title: "Build for here first",
        body: "Pidgin, bank SMS alerts, WhatsApp checkout, ajo circles. The best products fit how people already live, so I design for Lagos first. If it works here, it travels.",
        note: "local context is a feature",
        color: "var(--ca-yellow-soft)",
        rotate: "rotate-1"
      },
      {
        title: "AI assists, it doesn't decide",
        body: "When I use AI it extracts, explains or warns, and a rules engine or a person makes the final call. CheckAm can never call a message safe, and FastTrack's model never sets the loan amount.",
        note: "trust is earned",
        color: "var(--ca-purple)",
        rotate: "-rotate-2"
      }
    ],
    milestones: [
      {
        emoji: "🏁",
        title: "Devcenter Hacktober 2026",
        desc: "Shortlisted as one of 30 developers selected to compete. Built Sova for it.",
        year: "2026",
        color: "var(--ca-yellow)",
        rotate: "-rotate-1"
      },
      {
        emoji: "🌱",
        title: "Founder, Sova & Edify",
        desc: "Two live products: savings circles on a tamper-evident ledger, and exam prep for SS1–SS3.",
        year: "2026",
        color: "var(--ca-mint)",
        rotate: "rotate-1"
      },
      {
        emoji: "🏆",
        title: "Best Graduating Student",
        desc: "Nupat Technologies Fullstack Software Training Programme",
        year: "2024",
        color: "var(--ca-cyan)",
        rotate: "rotate-1"
      },
      {
        emoji: "🤖",
        title: "GDG Build with AI",
        desc: "Builder at GDG OAU Build with AI 2026",
        year: "2026",
        color: "var(--ca-pink-soft)",
        rotate: "-rotate-2"
      }
    ],
    stack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Flutter"] },
      { category: "Backend & APIs", items: ["Node.js", "Express", "Python", "FastAPI", "Socket.io", "REST APIs"] },
      { category: "Databases & DevOps", items: ["PostgreSQL", "Neon", "Supabase", "MongoDB", "GitHub Actions", "Vercel"] }
    ],
    workLabel: "Experience",
    work: [
      {
        role: "Founder",
        company: "Sova · Savings circles, on record",
        period: "2026 – Present",
        note: "Shortlisted for Devcenter Hacktober 2026"
      },
      {
        role: "Founder",
        company: "Edify · SS1–SS3 exam prep",
        period: "2026 – Present",
        note: "1,044+ practice questions, 44 lessons live"
      },
      {
        role: "Frontend Developer Intern",
        company: "Arrowstack · Kuza Store & Trackr",
        period: "2026",
        note: "Accessible e-commerce & logistics dashboard"
      },
      {
        role: "Fullstack Developer Intern",
        company: "Oasis · Blaze Platform",
        period: "2026",
        note: "Real-time Socket.io food ordering platform"
      },
      {
        role: "Fullstack Trainee",
        company: "Nupat Technologies",
        period: "2024",
        note: "Best Graduating Student"
      },
      {
        role: "B.Sc. Computer Engineering",
        company: "Obafemi Awolowo University (OAU)",
        period: "In Progress",
        note: "Undergraduate Engineering Degree"
      }
    ],
    skills: [
      { label: "Frontend & UI", color: "var(--ca-yellow)", dark: false, emojiA: "✨", emojiB: "🎨" },
      { label: "Backend & APIs", color: "var(--ca-green)", dark: true, emojiA: "🎨", emojiB: "🧩" },
      { label: "System Design", color: "var(--ca-magenta)", dark: true, emojiA: "🧩", emojiB: "👀" }
    ]
  },
  case_studies: {
    label: "explore my work!",
    title: "FEATURED WORKS",
    description: "A handful of builds worth pausing on: live products, client sites and open-source tools, all shipped.",
    challengeLabel: "the challenge",
    approachLabel: "my approach",
    resultLabel: "the results",
    relatedTitle: "more projects",
    items: [
      {
        slug: "checkam",
        num: "01",
        featured: true,
        title: "CheckAm",
        subtitle: "Scam Checker for Nigerian Messages & Links",
        description: "A free scam checker for Nigerian messages, links and screenshots. It explains what looks wrong, what it could verify and how to confirm it yourself, in plain English or Nigerian Pidgin.",
        category: "Security",
        tags: ["JavaScript", "PWA", "Tesseract.js", "Cloudflare Pages", "Vercel", "Groq", "Workers AI", "Node.js"],
        color: "var(--ca-magenta)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-magenta)]",
        liveUrl: "https://check-am-five.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/CheckAm",
        heroImages: [
          { type: "image", src: "/projects/checkam-home.jpg", alt: "CheckAm home screen with a message box, screenshot upload and English/Pidgin toggle" }
        ],
        facts: [
          { label: "Role", value: "Solo Full Stack Engineer", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "Weekend Build", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2026", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "NIBSS recorded ₦25.85 billion in digital-payment fraud losses in 2025, and most of it starts with a message: a fake job fee, a \"new number\" request, a BVN-update link. Global scam checkers don't know Nigerian banks, .gov.ng or Pidgin, and they show a green tick for any new scam site that isn't on a blocklist yet.",
            media: []
          },
          solution: {
            description: "Built an installable, framework-free web app whose rules engine runs on the phone: 31 rules for local scam scripts and 59 official Nigerian organisations to catch lookalike websites, with every finding explained in English and Pidgin. Screenshots are read on-device with Tesseract.js, or shared straight from WhatsApp. Only links go to a small serverless function for domain age, Safe Browsing, URLhaus and short-link checks. An optional AI check (Groq, with Cloudflare Workers AI as backup) can only raise a warning, never call a message safe.",
            media: []
          },
          result: {
            description: "A live app that deliberately has no \"safe\" result: it shows what looks suspicious, what it checked, what it can't know and how to verify through an official channel, with one-tap sharing to family on WhatsApp. It runs on free Cloudflare or Vercel tiers and keeps messages private by default.",
            facts: [
              { label: "Scam types", value: "44", desc: "Real-world scams caught in the test corpus", type: "count", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Tests", value: "108", desc: "Across the rules engine and scam corpus", type: "count", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Languages", value: "English + Pidgin", desc: "Every finding, tip and button", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      {
        slug: "fasttrack",
        num: "02",
        featured: true,
        title: "FastTrack",
        subtitle: "Digital Onboarding & Loan Pre-qualification",
        description: "A five-minute onboarding and loan pre-qualification app for Nigerian lenders. Applicants get an indicative amount and tier, and the credit officer gets a scored file to approve, query or decline.",
        category: "Fintech",
        tags: ["Flutter", "Dart", "Neon Postgres", "Neon Auth", "Node.js", "TypeScript", "Google Gemini", "GitHub Actions"],
        color: "var(--ca-ink)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-ink)]",
        liveUrl: "https://fastrack.name.ng/",
        githubUrl: "https://github.com/adeyanjufuhad/FastTrack",
        heroImages: [
          { type: "image", src: "/projects/fasttrack-result.jpg", alt: "FastTrack pre-qualification result next to a paper loan form" }
        ],
        facts: [
          { label: "Role", value: "Solo Full Stack Engineer", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "MVP Sprint", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2026", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "Smaller Nigerian lenders (asset managers with a lending arm, cooperatives and staff-loan schemes) still take applications on PDF forms and email. Applicants wait days to hear anything, and officers retype the same details from bank statements before they can even read the file.",
            media: []
          },
          solution: {
            description: "Built a Flutter app, for web and Android, on a Neon backend: Postgres, Neon Auth with Ed25519 JWT verification, private object storage with 10-minute presigned links, and a single Node.js function that enforces every access rule on the server. Applicants verify their BVN/NIN (sandbox), upload an ID and a statement or paste bank SMS alerts, and sign. Gemini pulls the income and spending figures out of those documents, and a deterministic rules engine, not the AI, sets the amount and tier.",
            media: []
          },
          result: {
            description: "A live, pitch-ready MVP: the applicant sees a pre-qualified amount in seconds, and the officer dashboard shows a scored file with approve, more-info and decline actions. CI/CD publishes the website, the live app and an offline demo to GitHub Pages, releases the Android APK and deploys the Neon Function.",
            facts: [
              { label: "Scoring", value: "~3s", desc: "From upload to pre-qualified amount", type: "text", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Tests", value: "97", desc: "Across the app, API and rules engine", type: "count", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Platforms", value: "Web + Android", desc: "Live app, offline demo & APK", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      ...recentProjects,
      {
        slug: "blaze",
        num: "03",
        featured: true,
        title: "Blaze",
        subtitle: "Wood-Fired Artisanal Pizza Ordering Platform",
        description: "An editorial, wood-fired pizza ordering platform featuring interactive custom pizza building, real-time Socket.io order tracking, and admin inventory management.",
        category: "Full Stack",
        tags: ["React 19", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Socket.io", "Framer Motion"],
        color: "var(--ca-blue)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-blue)]",
        liveUrl: "https://client-ten-psi-50.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/Blaze",
        heroImages: [
          { type: "image", src: "/projects/blaze-logo.png", alt: "Blaze Pizza Platform" }
        ],
        facts: [
          { label: "Role", value: "Full Stack Engineer", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "4 Weeks Sprint", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2025", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "Traditional food ordering apps often suffer from generic interfaces, rigid customization limitations, and lag between customer orders and live kitchen preparation queues. The goal was to engineer a tactile, editorial visual experience that supports infinite custom crusts and toppings with instantaneous bi-directional kitchen synchronization.",
            media: []
          },
          solution: {
            description: "Engineered an interactive drag-and-build pizza customization studio powered by Framer Motion. Connected the customer interface to an Express and Node.js microservice architecture with Socket.io real-time order progression channels and atomic transaction tracking backed by MongoDB Atlas.",
            media: []
          },
          result: {
            description: "Shipped a seamless end-to-end purchasing journey with fluid real-time order states from kneading dough to oven-firing and out-for-delivery, delivering ultra-low communication latency.",
            facts: [
              { label: "Socket Sync", value: "<40ms", desc: "Bi-directional order latency", type: "count", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Customizer", value: "100%", desc: "Interactive crust & topping engine", type: "count", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Checkout", value: "3 Steps", desc: "Frictionless ordering pipeline", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      {
        slug: "kuza-store",
        num: "04",
        featured: true,
        title: "Kuza Stores",
        subtitle: "Monochrome Streetwear E-Commerce Experience",
        description: "A minimalist, black-and-white e-commerce experience merging utilitarian fashion with strict WCAG AAA accessibility standards, persistent cart management, and client-side validated checkout.",
        category: "E-Commerce",
        tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "WCAG AAA", "Zustand"],
        color: "var(--ca-ink)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-ink)]",
        liveUrl: "https://kuza-store.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/kuza-store",
        heroImages: [
          { type: "image", src: "/projects/kuza-logo.jpg", alt: "Kuza Storefront" }
        ],
        facts: [
          { label: "Role", value: "Frontend Architect", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "3 Weeks", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2024", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "High-fashion e-commerce platforms frequently sacrifice web accessibility and keyboard usability for visual aesthetics. The challenge was building an austere, brutalist monochrome storefront that adheres to strict WCAG AAA contrast ratios, flawless screen reader support, and tactile keyboard navigation.",
            media: []
          },
          solution: {
            description: "Architected a Next.js 14 application with strict monochrome tokens (#000000 pitch black and #FFFFFF crisp white). Built custom focus management, keyboard-accessible size matrix selectors, local storage-persisted shopping bag state via Zustand, and schema-validated checkout.",
            media: []
          },
          result: {
            description: "Delivered a lightning-fast shopping experience achieving perfect accessibility scores and instant response times without a single layout shift.",
            facts: [
              { label: "Accessibility", value: "100/100", desc: "Lighthouse & WCAG AAA rating", type: "count", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Cart Update", value: "0ms", desc: "Instant optimistic state sync", type: "count", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Design System", value: "Strict Mono", desc: "Radical utilitarian aesthetics", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      {
        slug: "luxe-estate",
        num: "05",
        featured: false,
        title: "Luxe Estate",
        subtitle: "Luxury UK Real Estate Discovery & Property Portal",
        description: "A modern, high-fidelity real estate portal for browsing, searching, and inquiring about luxury properties across England, Scotland, and Wales with dynamic multi-criteria filtering and viewing scheduling.",
        category: "Real Estate",
        tags: ["React 19", "Tailwind CSS v4", "Node.js", "Express", "MongoDB", "Mongoose", "Vite"],
        color: "var(--ca-blue)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-blue)]",
        liveUrl: "https://luxe-estate-ymo2.vercel.app/",
        githubUrl: "https://github.com/adeyanjufuhad/Luxe_Estate",
        heroImages: [
          { type: "image", src: "/projects/luxe-estate.png", alt: "Luxe Estate UK Property Platform" }
        ],
        facts: [
          { label: "Role", value: "Full Stack Engineer", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "4 Weeks Sprint", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2025", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "Traditional property search portals in the UK often feel cluttered, sluggish with search filters, and lack clear visual distinction between residential sales and lettings, creating friction for high-value clients looking for luxury homes.",
            media: []
          },
          solution: {
            description: "Engineered Luxe Estates with React 19 and Tailwind CSS v4, pairing a clean architectural interface with instant client-side and server-side filtering by property type, postal district, and price limits, plus seamless viewing booking pipelines backed by Express and MongoDB.",
            media: []
          },
          result: {
            description: "Delivered an immersive, editorial real estate discovery experience with instant responsive queries, currency conversion, and streamlined viewing bookings.",
            facts: [
              { label: "Listings", value: "10,000+", desc: "Curated luxury UK properties", type: "count", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Locations", value: "500+", desc: "Towns across England & Scotland", type: "count", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Verification", value: "100%", desc: "Verified listings & bookings", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      {
        slug: "agrofinis",
        num: "06",
        featured: false,
        title: "AgroFinis",
        subtitle: "All-in-One Agri-Platform & Market Intelligence",
        description: "An all-in-one agri-platform connecting Nigerian agribusinesses to verified farmers, real-time commodity markets, weather intelligence, and AI-driven agronomic advice.",
        category: "AgriTech",
        tags: ["React", "Vite", "JavaScript", "REST APIs", "Tailwind CSS"],
        color: "var(--ca-green)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-green)]",
        liveUrl: "https://agro-finis.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/AgroFinis",
        heroImages: [
          { type: "image", src: "/projects/agrofinis-farm.png", alt: "AgroFinis Agricultural Platform" }
        ],
        facts: [
          { label: "Role", value: "Full Stack Developer", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "6 Weeks", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2024", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "Agricultural trade in Nigeria is hindered by market fragmentation, middlemen markups, volatile grain and crop pricing, and lack of localized weather and soil intelligence for smallholder farmers and institutional buyers.",
            media: []
          },
          solution: {
            description: "Engineered AgroFinis as a unified web portal combining live grain and commodity spot prices, direct farmer verification profiles, weather forecast integration, and advisory dashboards designed to load quickly on low-bandwidth mobile connections.",
            media: []
          },
          result: {
            description: "Empowered local agribusinesses to discover verified suppliers, negotiate fair prices with transparent live market indices, and minimize post-harvest loss through data-backed scheduling.",
            facts: [
              { label: "Network", value: "2G/3G", desc: "Optimized for mobile field use", type: "text", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Pricing", value: "Live Spot", desc: "Real-time commodity feeds", type: "text", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Ecosystem", value: "Full Stack", desc: "Farmer discovery to checkout", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      {
        slug: "trackr",
        num: "07",
        featured: false,
        title: "Trackr",
        subtitle: "Real-Time Logistics & Fleet Operations Dashboard",
        description: "High-performance, accessible, and real-time logistics operations dashboard built for modern fleet management, driver allocation, and supply chain coordination.",
        category: "Logistics",
        tags: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
        color: "var(--ca-magenta)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-magenta)]",
        liveUrl: "https://trackr-chi-eight.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/Trackr",
        heroImages: [
          { type: "image", src: "/projects/trackr-banner.jpg", alt: "Trackr Fleet Dashboard" }
        ],
        facts: [
          { label: "Role", value: "Lead Frontend Dev", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "5 Weeks", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2024", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "Fleet coordinators often struggle with clunky legacy dispatch portals that freeze during peak shipment volumes, making real-time driver tracking and delivery SLA management stressful and error-prone.",
            media: []
          },
          solution: {
            description: "Built Trackr using React 18 and TypeScript with high-density data visualizations via Recharts, instant column filtering, multi-metric telemetry graphs, and reactive shipment status counters.",
            media: []
          },
          result: {
            description: "Provided logistics operators with an immediate 360-degree overview of active fleets, route delays, transit checkpoints, and fuel efficiency metrics at continuous 60fps responsiveness.",
            facts: [
              { label: "Rendering", value: "60 FPS", desc: "Smooth high-density telemetry", type: "count", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Analytics", value: "4+ Views", desc: "Interactive Recharts pipelines", type: "count", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Efficiency", value: "2x", desc: "Faster dispatch allocation", type: "count", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      },
      {
        slug: "owo",
        num: "08",
        featured: false,
        title: "Owo",
        subtitle: "Nigerian Fintech Wallet & Savings Onboarding",
        description: "A warm, accessible 7-step customer onboarding flow for a Nigerian digital fintech wallet app built with React, TypeScript, Tailwind CSS, Framer Motion, and Zustand.",
        category: "Fintech",
        tags: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Zustand", "Zod"],
        color: "var(--ca-orange)",
        textColor: "text-white",
        bgClass: "bg-[var(--ca-orange)]",
        liveUrl: "https://owo-rho-lyart.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/OWO",
        heroImages: [
          { type: "image", src: "/projects/owo-logo.svg", alt: "Owo Fintech Wallet" }
        ],
        facts: [
          { label: "Role", value: "Product Engineer", color: "var(--ca-cyan)", rotate: "-rotate-2", clip: "ca-clip-blob-1" },
          { label: "Timeline", value: "3 Weeks", color: "var(--ca-yellow-soft)", rotate: "rotate-2", clip: "ca-clip-blob-2" },
          { label: "Year", value: "2025", color: "var(--ca-purple)", rotate: "rotate-1", clip: "ca-clip-blob-3" }
        ],
        story: {
          problem: {
            description: "Fintech onboarding flows in Africa experience up to 60% user drop-off due to rigid government identity requirements (BVN/NIN), cold corporate branding, and unforgiving form validation errors.",
            media: []
          },
          solution: {
            description: "Created Owo ('Money' in Yorùbá), a warm and welcoming 7-step onboarding flow featuring friendly copy, tactile Framer Motion card transitions, persisted step recovery with Zustand, and instant client-side Zod validation.",
            media: []
          },
          result: {
            description: "Transforms daunting regulatory identity verification into an intuitive, accessible journey that builds trust and excitement right from step one.",
            facts: [
              { label: "Completion", value: "+45%", desc: "Smoother multi-step onboarding", type: "count", color: "var(--ca-cyan)", rotate: "-rotate-2" },
              { label: "Validation", value: "Instant", desc: "Zero-latency Zod inline feedback", type: "text", color: "var(--ca-yellow-soft)", rotate: "rotate-2" },
              { label: "Accessibility", value: "WCAG 2.1 AA", desc: "High contrast & screen reader support", type: "text", color: "var(--ca-purple)", rotate: "rotate-1" }
            ],
            media: []
          }
        }
      }
    ]
  },
  gallery: {
    label: "playground",
    title: "JUST FOR FUN",
    items: [
      {
        id: "item-blaze",
        title: "Blaze Pizza",
        note: "Socket.io real-time order builder",
        color: "var(--ca-blue)",
        img: "/projects/blaze-logo.png",
        isLogo: true,
        link: "/case-studies/blaze",
        rotate: -3,
        badgeRotate: -6,
        x: 60,
        y: 80,
        zIndex: 1
      },
      {
        id: "item-kuza",
        title: "Kuza Stores",
        note: "Streetwear e-commerce · WCAG AAA",
        color: "var(--ca-yellow-soft)",
        img: "/projects/kuza-logo.jpg",
        isLogo: true,
        link: "/case-studies/kuza-store",
        rotate: 2,
        badgeRotate: -4,
        x: 350,
        y: 60,
        zIndex: 2
      },
      {
        id: "item-luxe",
        title: "Luxe Estate",
        note: "UK luxury property marketplace",
        color: "var(--ca-cyan)",
        img: "/projects/luxe-estate.png",
        isLogo: false,
        link: "/case-studies/luxe-estate",
        rotate: -2,
        badgeRotate: 4,
        x: 650,
        y: 90,
        zIndex: 3
      },
      {
        id: "item-gdg",
        title: "Build with AI",
        note: "2026 at OAU GDG Build with AI",
        color: "var(--ca-magenta)",
        img: "/images/fuhad-event.jpg",
        isLogo: false,
        rotate: 3,
        badgeRotate: -5,
        x: 950,
        y: 80,
        zIndex: 4
      },
      {
        id: "item-trackr",
        title: "Trackr Logistics",
        note: "Real-time telemetry & dispatch",
        color: "var(--ca-purple)",
        img: "/projects/trackr-banner.jpg",
        isLogo: false,
        link: "/case-studies/trackr",
        rotate: 3,
        badgeRotate: -5,
        x: 120,
        y: 400,
        zIndex: 5
      },
      {
        id: "item-agrofinis",
        title: "AgroFinis",
        note: "AI crop advisory & commodity feed",
        color: "var(--ca-green)",
        img: "/projects/agrofinis-farm.png",
        isLogo: false,
        link: "/case-studies/agrofinis",
        rotate: -3,
        badgeRotate: 3,
        x: 440,
        y: 410,
        zIndex: 6
      },
      {
        id: "item-portrait",
        title: "Adeyanju Fuhad",
        note: "Founder · Sova & Edify",
        color: "var(--ca-yellow)",
        img: "/images/fuhad-professional.jpg",
        isLogo: false,
        rotate: 2,
        badgeRotate: -4,
        x: 770,
        y: 410,
        zIndex: 7
      },
      {
        id: "item-fasttrack",
        title: "FastTrack",
        note: "Loan pre-qualification in 5 minutes",
        color: "var(--ca-cyan)",
        img: "/projects/fasttrack-result.jpg",
        isLogo: false,
        link: "/case-studies/fasttrack",
        rotate: -2,
        badgeRotate: 4,
        x: 1080,
        y: 400,
        zIndex: 8
      },
      {
        id: "item-checkam",
        title: "CheckAm",
        note: "Check am before you click, pay or share",
        color: "var(--ca-magenta)",
        img: "/projects/checkam-home.jpg",
        isLogo: false,
        link: "/case-studies/checkam",
        rotate: 3,
        badgeRotate: -4,
        x: 1250,
        y: 70,
        zIndex: 9
      }
    ]
  },
  contact: {
    label: "say hi",
    title: "Let's talk",
    comment: {
      author: "Satisfied Collaborator",
      avatar: "/images/fuhad-professional.jpg",
      note: "Adeyanju built our core features ahead of schedule and with incredible attention to detail.",
      reactions: 1
    },
    bannerTagline: "let's build something worth showing",
    banner: "CONTACT",
    description: "Got an idea, a collab, or just want to geek out about something? Send a message.",
    email: "adeyanjufuhad@gmail.com",
    successTitle: "Message sent!",
    successBody: "Thanks for reaching out, I'll get back to you soon."
  },
  resume: {
    pdfUrl: "/Adeyanju_Fuhad_Resume.pdf",
    filename: "Adeyanju_Fuhad_Resume.pdf",
    name: "Adeyanju Fuhad",
    headline: "Full Stack Developer · Founder of Sova & Edify",
    location: "Lagos, Nigeria",
    phone: "+234 704 929 4736",
    email: "adeyanjufuhad@gmail.com",
    portfolio: "fuhad-adeyanju.vercel.app",
    portfolioUrl: "https://fuhad-adeyanju.vercel.app",
    github: "github.com/adeyanjufuhad",
    githubUrl: "https://github.com/adeyanjufuhad",
    linkedin: "linkedin.com/in/adeyanju-fuhad-206802320",
    linkedinUrl: "https://www.linkedin.com/in/adeyanju-fuhad-206802320/",
    openTo: "Open to full-time roles: remote (worldwide) or on-site / hybrid in Lagos · freelance & contract",
    summary: "Full stack developer who ships web and mobile products end to end, from database design to the last UI state. Founder of two live products, Sova and Edify, and one of 30 developers shortlisted to compete in Devcenter Hacktober 2026. Works across React, Next.js, Node.js, Python (FastAPI), Flutter and PostgreSQL, and backs production work with automated tests and CI/CD.",
    technicalSkills: [
      {
        category: "Languages",
        skills: ["TypeScript", "JavaScript", "Python", "Dart", "SQL", "HTML / CSS"],
        color: "var(--ca-yellow)"
      },
      {
        category: "Frontend & Mobile",
        skills: ["React", "Next.js", "Tailwind CSS", "Flutter", "React Native (Expo)", "Framer Motion", "Accessibility (WCAG)"],
        color: "var(--ca-cyan)"
      },
      {
        category: "Backend & APIs",
        skills: ["Node.js", "Express", "FastAPI", "REST APIs", "WebSockets (Socket.io)", "JWT Auth", "Payments (Razorpay, Paystack)"],
        color: "var(--ca-green)"
      },
      {
        category: "Data & Cloud",
        skills: ["PostgreSQL (Neon, Supabase)", "MongoDB", "Vercel", "Cloudflare Workers", "Render", "GitHub Actions CI/CD", "Git"],
        color: "var(--ca-magenta)"
      },
      {
        category: "AI Integration",
        skills: ["Google Gemini API", "Groq (Llama)", "Hugging Face Inference", "Rules-based AI guardrails"],
        color: "var(--ca-blue)"
      }
    ],
    experience: [
      {
        company: "Sova",
        role: "Founder & Lead Engineer",
        period: "2026 – Present",
        location: "Nigeria",
        tagline: "Savings-circle records for ajo, esusu and adashe groups",
        url: "https://sova.rumptycloud.app",
        highlights: [
          "Built and launched a Flutter app (web, Android) and Node.js API that keeps a tamper-evident record of savings circles.",
          "Enforced business rules in PostgreSQL 17 functions and triggers; every change lands in a verifiable SHA-256 hash chain.",
          "Automated Android releases and 6-hourly public ledger checkpoints with GitHub Actions."
        ]
      },
      {
        company: "Edify",
        role: "Founder & Engineer",
        period: "2026 – Present",
        location: "Nigeria",
        tagline: "Exam-prep platform for SS1–SS3 students",
        url: "https://edify-sigma-plum.vercel.app",
        highlights: [
          "Launched a paid study platform (plans from ₦1,000) with 1,044+ practice questions, 44 lessons and timed CBT tests.",
          "Built on Next.js and Neon Postgres with a typed curriculum registry, so new lessons ship without route or API changes."
        ]
      },
      {
        company: "Arrowstack",
        role: "Frontend Developer Intern",
        period: "2026",
        location: "Remote",
        tagline: "Product internship",
        highlights: [
          "Delivered Kuza, a Next.js and TypeScript storefront with accessible keyboard navigation, persistent cart and checkout.",
          "Built Trackr, a logistics dashboard with Recharts analytics, sortable and filterable tables, and an alerts centre."
        ]
      },
      {
        company: "Oasis",
        role: "Full Stack Developer Intern",
        period: "2026",
        location: "Remote",
        tagline: "Product internship",
        highlights: [
          "Shipped Blaze, a MERN pizza-ordering platform with real-time order tracking over Socket.io and Razorpay payments.",
          "Implemented JWT auth with email verification, Cloudinary uploads, and an admin dashboard with low-stock email alerts."
        ]
      }
    ],
    projects: [
      {
        title: "CheckAm — Scam Checker for Nigerian Messages & Links",
        isLive: true,
        liveUrl: "https://check-am-five.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/CheckAm",
        stack: "JavaScript · PWA · Tesseract.js · Serverless Functions · Groq",
        highlights: [
          "Free app that flags scam messages, screenshots and links in English or Pidgin; an on-device rules engine keeps data private.",
          "AI can only raise a warning, never mark a message safe; 108 automated tests cover 44 real-world scam types."
        ]
      },
      {
        title: "FastTrack — Loan Onboarding & Pre-qualification",
        isLive: true,
        liveUrl: "https://fastrack.name.ng/",
        githubUrl: "https://github.com/adeyanjufuhad/FastTrack",
        stack: "Flutter · Neon Postgres · Node.js / TypeScript · Gemini · GitHub Actions",
        highlights: [
          "Five-minute flow returns a pre-qualified loan amount in ~3s; Gemini extracts the figures, a deterministic rules engine decides.",
          "Ed25519 JWT verification, presigned private storage, 97 automated tests, and CI/CD shipping web, Android and backend."
        ]
      },
      {
        title: "RepoSpec — Grounded Repo Context for AI Coding Assistants",
        isLive: true,
        liveUrl: "https://repospec.vercel.app",
        githubUrl: "https://github.com/adeyanjufuhad/RepoSpec",
        stack: "Next.js · TypeScript · Static parsing · GitHub App",
        highlights: [
          "Extracts models, routes, types and rules from any GitHub commit via static parsing into a token-budgeted context file."
        ]
      },
      {
        title: "Big Apple Beauty — Client Storefront with WhatsApp Checkout",
        isLive: true,
        liveUrl: "https://bigapplebeauty.store",
        githubUrl: "https://github.com/adeyanjufuhad/big-apple-world",
        stack: "Next.js · Neon Postgres · Cloudflare Workers",
        highlights: [
          "Storefront and admin for a Lagos wholesaler on the client's own domain, with WhatsApp checkout and server-side pricing."
        ]
      }
    ],
    education: [
      {
        institution: "Obafemi Awolowo University (OAU), Ile-Ife",
        degree: "B.Sc. Computer Engineering",
        period: "Expected 2030"
      }
    ],
    achievements: [
      {
        title: "Shortlisted Developer — Devcenter Hacktober 2026",
        issuer: "One of 30 developers selected to compete; built Sova",
        year: "2026"
      },
      {
        title: "Best Graduating Student",
        issuer: "Nupat Technologies Fullstack Software Training Programme",
        year: "2024"
      },
      {
        title: "Builder, GDG OAU Build with AI",
        issuer: "Google Developer Groups, Obafemi Awolowo University",
        year: "2026"
      }
    ],
    certifications: [
      {
        name: "Fullstack Software Engineering Programme — Nupat Technologies, 2024",
        issuer: "Graduated as Best Graduating Student"
      }
    ]
  },
  links: {
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/adeyanju-fuhad-206802320/", color: "var(--ca-yellow)" },
      { name: "GitHub", href: "https://github.com/adeyanjufuhad", color: "var(--ca-magenta)" },
      { name: "X", href: "https://x.com/AdeyanjuFuhad", color: "var(--ca-green)" }
    ]
  }
};

// Keep display numbers unique as the project collection grows.
portfolioData.case_studies.items = portfolioData.case_studies.items.map((project, index) => ({ ...project, num: String(index + 1).padStart(2, "0") }));
