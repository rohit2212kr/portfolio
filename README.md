# Rohit Kumar // Monochrome Brutalist Portfolio // 2026

A high-performance, strictly monochrome (B&W brutalist minimalism) and hyper-animated single-page portfolio engineered with **React**, **Vite**, **Framer Motion**, and **Tailwind CSS**.

---

## Aesthetic & Design System

- **Palette**: Pure `#000000` (Black), `#0d0d0d` (Surface), `#262626` (Borders), `#8c8c8c` (Muted Labels), and `#ffffff` (Crisp text). Zero neon/color accents.
- **Background**: Monochromatic dot-grid canvas with dynamic white radial spotlight tracking the cursor, overlaid with a matte high-grain film texture.
- **Typography**: Inter & Geist Mono loaded via Google Fonts.
- **Monochrome Enforcement**: Global `grayscale(100%)` CSS filter applied to all media, icons, and graphics.

---

## Core Sections & Features

### 1. Hero & Hanging 3D Lanyard ID Card
- **Split Screen**:
  - Left: Minimalist intro (`PORTFOLIO // 2026`), bold headline (*"Engineering robust full-stack applications & developer tools"*), engineering summary, and CTAs (*"View Projects"*, *"GitHub Profile"*, and LinkedIn link).
  - Right: Interactive 3D Hanging Lanyard Badge with:
    - Harmonic pendulum drop oscillation on load (`useSpring` physics `damping: 15`, `stiffness: 100`).
    - Continuous cursor-based 3D tilt perspective (`rotateX`, `rotateY` based on `(x/width) * 25deg`).
    - Dynamic monochromatic specular holographic glare layer shifting angles on hover.
    - Draggable and flickable physics with elastic strap tension and pendulum recoil.
    - Developer photo, name, role badge, pulsed status indicator (*"Available for Opportunities"*), and SVG barcode.

### 2. Featured Projects Bento Grid (3D Perspective Tilt)
- **Axora** ([Live Demo](https://axora-dlb6.vercel.app/) | [GitHub](https://github.com/rohit2212kr/Axora)):
  - MERN Stack e-commerce architecture.
  - Interactive e-commerce flow diagram graphic (`Client UI` ➔ `Auth Guard` ➔ `Stripe API` ➔ `Webhook Dispatch` ➔ `Order DB`) with real-time protocol inspector.
- **API Explorer** ([Live Demo](https://api-explorer-lsa7.vercel.app/) | [GitHub](https://github.com/rohit2212kr/API-Explorer)):
  - High-throughput Postman-style developer REST testing suite wireframe.
  - Interactive method selector, active URL bar, and endpoint history list.
  - Live simulated streaming monochrome JSON response animation on hover/click.
- **Roast & Bloom Cafe** ([Live Demo](https://cafe-sample-web.vercel.app/) | [GitHub](https://github.com/rohit2212kr/Cafe_sample_web)):
  - Specialty coffee roastery & table reservation web app.
  - Interactive table seating layout & live WhatsApp Business API booking dispatch console.

### 3. Technical Arsenal & Interactive Monochrome Terminal
- **Skills Matrix (Arsenal)**:
  - Frontend, Backend & APIs, Databases & Infra, Problem Solving & CS.
  - LeetCode 300+ Solved brutalist breakdown card with Easy/Medium/Hard distribution bars.
- **Interactive Terminal Widget**:
  - Stark white ASCII art banners.
  - CLI prompt `rohit@portfolio:~$` with flashing block cursor `█`.
  - Commands supported: `ls`, `cat about.txt`, `skills`, `cat axora`, `run api-explorer`, `contact`, `clear`, `banner`, `whoami`, `date`.
  - Up/Down arrow command history navigation and quick-command suggestion chips.

### 4. Minimalist Glass Footer & Social Connects
- Fixed bottom frosted glass dock (`backdrop-blur-md border-white/10`).
- True physics **Magnetic "COPY EMAIL" Button** copying `rohit2212kr@gmail.com` with instant `"COPIED!"` feedback.
- Grain-textured **Contact Form Modal** popup (`ESC` key support, simulated dispatch).
- Social links to GitHub, LinkedIn, and Twitter/X.

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```
