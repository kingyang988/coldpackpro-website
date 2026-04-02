/**
 * Home.tsx
 * Main landing page for ColdPack Pro, showcasing OEM cold-chain solutions and 7-day standard offerings.
 */

import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import AdvantagesSection from '../components/home/AdvantagesSection'
import TemplatesSection from '../components/home/TemplatesSection'
import ProcessSection from '../components/home/ProcessSection'
import FastLaneSection from '../components/home/FastLaneSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import FAQSection from '../components/home/FAQSection'
import FinalCTASection from '../components/home/FinalCTASection'

/**
 * HomePage
 * Renders the full marketing homepage composed of reusable section components.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top navigation with brand and quick anchors */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500 text-xs font-semibold text-slate-950">
              CP
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-50">
              ColdPack Pro
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#solutions" className="hover:text-slate-50">
              OEM Programs
            </a>
            <a href="#process" className="hover:text-slate-50">
              Engineered Systems
            </a>
            <a href="#fast" className="hover:text-slate-50">
              7-Day Standard
            </a>
            <a href="#faq" className="hover:text-slate-50">
              FAQ
            </a>
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-cyan-400"
          >
            Start OEM Project
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <TrustBar />
        <AdvantagesSection />
        <TemplatesSection />
        <ProcessSection />
        <FastLaneSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Minimal industrial-style footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:px-6">
          <span>&copy; {new Date().getFullYear()} ColdPack Pro. All rights reserved.</span>
          <span>Questions? Reach us at hello@coldpackpro.com</span>
        </div>
      </footer>
    </div>
  )
}