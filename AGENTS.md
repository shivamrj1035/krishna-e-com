<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Shyam E-Commerce: Project Manifest & Architecture

This document tracks the development cycle and architecture of the Shyam E-Commerce platform to ensure consistency for all AI Agents.

## Theme & Aesthetics
- **Core Theme**: Medium Krishna Theme (Soft Sandalwood/Ivory background, deep Peacock Blue & Emerald accents).
- **Styling**: Vanilla CSS (`globals.css` and CSS Modules) with Glassmorphism UI elements.
- **Animations**: Orchestrated using `framer-motion` for a fluid, premium "divine" feel.

## Routing Architecture (Next.js App Router)
- **`/` (Customer Landing)**: Immersive, animated hero sections showcasing featured products.
- **`/admin` (Admin Portal)**: Functional dashboard with a persistent sidebar (`AdminLayout`) for managing products, orders, and site trends.

## Development Cycle / Roadmap
- [x] **Phase 1: Foundation**: Next.js init, basic routing, and initial styling system.
- [x] **Phase 2: Initial Components**: Loading screen, Navbar, Admin Sidebar, Landing Page structure.
- [x] **Phase 3: Animation & Polish**: Integrated Framer Motion, refined theme to a "medium" spiritual aesthetic.
- [x] **Phase 4: Product Integration**: Connect to a backend or mock data for real product listings and carts.
- [ ] **Phase 5: Admin Functionality**: Build out CRUD interfaces for the admin dashboard.
