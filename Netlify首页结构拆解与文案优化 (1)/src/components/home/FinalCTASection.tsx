/**
 * FinalCTASection.tsx
 * Closing call-to-action encouraging users to start an OEM cold-chain project or book a call.
 */

import type React from 'react'

/**
 * FinalCTASection
 * Wraps up the page with a strong, dual-option CTA for premium food brands.
 */
const FinalCTASection: React.FC = () => {
  return (
    <section
      id="cta"
      className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-8 text-center shadow-lg shadow-black/40 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Get started
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            Ready to protect your premium cold chain?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-300">
            Whether you&apos;re shipping seafood, caviar, fresh produce or desserts, we&apos;ll help design
            an OEM cold-chain system that keeps every shipment on‑spec.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/40 hover:bg-cyan-400 sm:text-sm"
            >
              Start OEM Project
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-2 text-xs font-semibold text-slate-100 hover:border-slate-500 sm:text-sm"
            >
              Book a Call
            </a>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            Prefer email? Contact us at hello@coldpackpro.com
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection