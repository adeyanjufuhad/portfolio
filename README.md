# 🎨 Adeyanju Fuhad — Developer Portfolio

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Simple Icons](https://img.shields.io/badge/Simple_Icons-Icons_Grid-111111?style=for-the-badge&logo=simple-icons&logoColor=white)](https://simple-icons.github.io/simple-icons/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Turning ambitious ideas into resilient code."**  
> A personal portfolio and digital craft space built by **Adeyanju Fuhad**, a Full Stack Developer based in Lagos, Nigeria. Designed with a distinctive creative-artsy aesthetic featuring tactile paper-grain textures, stickers, scrapbook polaroids, and interactive micro-interactions.

---

## 🌟 Highlights & Key Features

- **🛠️ Interactive Tech Stack & Languages Grid (`/`)**
  - Displays 20+ technologies and programming languages actively used in Fuhad's production and open-source projects.
  - Built with official SVG brand paths and hex colors from [simple-icons](https://github.com/simple-icons/simple-icons).
  - Category filter tabs: `All [20]`, `Languages [7]`, `Frameworks [4]`, `Backend [3]`, `Databases & DevOps [6]`.
  - Hover tooltips displaying project associations (`Blaze`, `Kuza Store`, `Trackr`, `TaxBridge`, `AgroFinis`, etc.) and direct links to GitHub repositories.

- **📁 Detailed Case Studies (`/case-study`)**
  - Deep-dive architectural breakdowns into full-stack and fintech projects:
    - **Blaze**: High-speed payment infrastructure bridging crypto assets and fiat currency.
    - **Kuza Store**: Scalable multi-vendor e-commerce platform with real-time inventory and checkout.
    - **Trackr**: Real-time personal financial analytics and expense tracking dashboard.
    - **TaxBridge**: Automated tax calculation and compliance filing engine.
    - **AgroFinis**: Agricultural financing platform connecting verified farmers with decentralized capital.
    - **Luxe Estate**: Modern luxury real estate discovery and tour scheduling platform.

- **📖 Story & Journey (`/about`)**
  - Personal narrative chronicling the evolution from self-taught beginnings to full-stack engineering at Oasis Infobyte.
  - Real-world polaroids from tech events, including speaking and participating at the **2026 OAU GDG Build with AI** conference.
  - Interactive career timeline, philosophy, and tech toolbelt.

- **📬 Direct Gmail Contact System (`/contact`)**
  - Multi-step interactive message dispatch card.
  - Automated direct email delivery straight to **`adeyanjufuhad@gmail.com`** via FormSubmit AJAX API.
  - One-click **Gmail Web Compose (`Gmail ↗`)** shortcut pre-filling subject and recipient.
  - Express.js backend persistence and spam-protected honeypot fields.

- **🧪 Interactive Playground (`/playground`)**
  - Creative UI experiments, interactive canvas toys, and micro-interactions.

- **📄 Embedded Resume Viewer (`/resume`)**
  - Live in-browser resume viewer with instant PDF download option.

---

## 💻 Tech Stack & Tooling

### Frontend
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens (`--ca-ink`, `--ca-yellow`, `--ca-blue`, `--ca-magenta`, etc.)
- **Typography**: `DM Mono`, `Handjet`, `Inter`, `Just Me Again Down Here`
- **Icons**: [Lucide React](https://lucide.dev/) & [Simple Icons](https://simple-icons.github.io/simple-icons/)
- **Animations**: CSS Keyframes, SVG hand-drawn scribbles, Staggered text animations

### Backend & Services
- **Server**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Email Dispatch**: [FormSubmit](https://formsubmit.co/) AJAX integration routing directly to `adeyanjufuhad@gmail.com`
- **Data Persistence**: Local JSON message archival (`server/messages.json`)

---

## 📂 Project Structure

```text
portfolio/
├── public/                      # Static assets, resume PDF, and images
│   ├── images/                  # Event photos, project screenshots, polaroids
│   ├── Adeyanju_Fuhad_Resume.pdf # Official downloadable resume
│   └── icon.svg                 # Site favicon
├── server/                      # Lightweight Node/Express backend
│   ├── server.js                # Express API endpoints (/api/contact, /api/health)
│   └── messages.json            # Inquiry storage backup
├── src/
│   ├── components/              # Modular UI components
│   │   ├── Header.jsx           # Top sticky navigation bar & status pill
│   │   ├── Footer.jsx           # Clean footer with social links & copyright
│   │   ├── TechStackGrid.jsx    # Interactive Simple Icons technology grid
│   │   ├── ProjectCard.jsx      # Project preview card with tags & links
│   │   ├── Polaroid.jsx         # Scrapbook polaroid photo component
│   │   └── ...                  # Custom stickers, badges, animations
│   ├── data/
│   │   ├── portfolioData.js     # Centralized bio, experience, and project data
│   │   └── techStackIcons.js    # Simple-icons SVG definitions and metadata
│   ├── pages/                   # Application routes
│   │   ├── Home.jsx             # Hero section, tech grid, featured projects
│   │   ├── About.jsx            # Developer story, polaroids, journey timeline
│   │   ├── CaseStudy.jsx        # Deep dive into engineering solutions
│   │   ├── Playground.jsx       # Interactive sandbox & experiment showcase
│   │   ├── Resume.jsx           # In-browser resume viewer & download
│   │   └── Contact.jsx          # Multi-step contact form with Gmail dispatch
│   ├── App.jsx                  # Main router setup & layout
│   ├── index.css                # Creative-artsy design tokens & utilities
│   └── main.jsx                 # React DOM mount point
├── .gitignore                   # Ignored files (node_modules, dist, secrets)
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Tailwind typography, colors, and shadows
└── vite.config.js               # Vite configuration and API proxy
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/adeyanjufuhad/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally in Development Mode
You can run both the Vite frontend and the Express backend simultaneously:

```bash
# Terminal 1: Run Vite client (http://localhost:3000)
npm run dev

# Terminal 2: Run Express server (http://localhost:3001)
npm run server
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, ready to deploy to [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [GitHub Pages](https://pages.github.com/).

---

## 🏆 Featured Projects

| Project | Description | Stack | Links |
| :--- | :--- | :--- | :--- |
| **Blaze** | Next-gen crypto & fiat financial settlement engine with real-time webhooks. | Next.js, TypeScript, Go, PostgreSQL | [GitHub](https://github.com/adeyanjufuhad/Blaze) |
| **Kuza Store** | Production-ready multi-tenant e-commerce platform with automated order management. | React, Node.js, Express, MongoDB | [GitHub](https://github.com/adeyanjufuhad/kuza-store) |
| **Trackr** | Personal finance intelligence and portfolio analytics tracker. | React, Tailwind CSS, REST APIs | [GitHub](https://github.com/adeyanjufuhad/Trackr) |
| **TaxBridge** | Automated tax filing calculation system built for African freelancers and businesses. | TypeScript, React, Node.js | [GitHub](https://github.com/adeyanjufuhad) |
| **AgroFinis** | Decentralized agri-fintech matching smallholder farmers to micro-investors. | React, Web3, Express, Tailwind CSS | [GitHub](https://github.com/adeyanjufuhad/AgroFinis) |
| **Luxe Estate** | Curated luxury real estate discovery engine with interactive virtual tour scheduling. | React, JavaScript, Tailwind CSS | [GitHub](https://github.com/adeyanjufuhad/Luxe_Estate) |

---

## 📬 Contact & Connect

Feel free to reach out for full-time opportunities, consulting, or engineering collaborations:

- **Portfolio**: [adeyanjufuhad.me](https://github.com/adeyanjufuhad/portfolio)
- **GitHub**: [@adeyanjufuhad](https://github.com/adeyanjufuhad)
- **LinkedIn**: [linkedin.com/in/adeyanju-fuhad](https://linkedin.com/in/adeyanju-fuhad)
- **X / Twitter**: [@AdeyanjuFuhad_](https://x.com/AdeyanjuFuhad_)
- **Email**: [adeyanjufuhad@gmail.com](mailto:adeyanjufuhad@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
