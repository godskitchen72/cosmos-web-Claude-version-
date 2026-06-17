# Cosmos Medical Technologies — Marketing Website

Enterprise marketing website for Cosmos Medical Technologies built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Stack

- **Framework:** Next.js 15 (static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + inline styles
- **Animation:** Canvas API (starfield) + CSS transitions
- **Icons:** Lucide React
- **Deploy:** Vercel

---

## Local Development (Termux)

```bash
# 1. Navigate to the project
cd ~/cosmos-website

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# Opens at http://localhost:3000
```

---

## Build

```bash
npm run build
# Outputs to /out (static export)
```

---

## Deploy to Vercel (CLI)

```bash
# Deploy to production
vercel --prod --yes
```

Or link to GitHub repo and auto-deploy on push.

---

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout, metadata, fonts
    page.tsx            # Main page assembling all sections
    globals.css         # Global styles, CSS utilities
  components/
    ui/
      StarsCanvas.tsx   # Animated starfield (canvas)
    layout/
      Navigation.tsx    # Top nav with dropdowns
      Footer.tsx        # Footer with links
    sections/
      HeroSection.tsx   # Hero with C logo mark + floating stats
      TrustSection.tsx  # HIPAA / SOC2 / Cloud badges
      DashboardSection.tsx  # Live dashboard mockup
      PlatformOverview.tsx  # 6 feature cards
      WhoWeServe.tsx    # 6 specialty cards
      EcosystemSection.tsx  # Connected nodes + Why Cosmos
      CTASection.tsx    # Demo request CTA
```

---

## Customization

**Colors** — all defined in `tailwind.config.ts` under `cosmos.*` and as CSS vars in `globals.css`.

**Logo** — SVG inline in `Navigation.tsx` and `Footer.tsx`. Replace with `<Image>` tag pointing to your actual logo file if preferred.

**Content** — all section text is hardcoded in each component for simplicity. To make dynamic, replace with a CMS or JSON data source.

---

## Adding the Real Logo

Place your logo files in `/public/`:
- `public/cosmos-logo.png`
- `public/cosmos-logo.svg`

Then in `Navigation.tsx` replace the inline SVG with:
```tsx
import Image from 'next/image'
<Image src="/cosmos-logo.svg" width={40} height={40} alt="Cosmos Medical Technologies" />
```

---

## Notes for Termux

- Run `npm install` not `yarn` (yarn may have issues)
- Use `vercel --prod --yes` for deployment, not `git push`
- All Google Fonts load via `@import` in `globals.css` — no build step needed
