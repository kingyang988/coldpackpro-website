/**
 * HeroSection.tsx
 * Hero area with main headline, subheadline, primary actions, and a visual preview mockup.
 * Tailored for ColdPack Pro's factory-direct OEM cold-chain positioning.
 */

import type React from 'react'

/**
 * HeroSection
 * Highlights the core value: OEM cold-chain systems built for premium seafood, caviar, produce and desserts.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center md:px-6 md:pb-20 md:pt-14 lg:gap-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Factory‑direct cold-chain systems for seafood, caviar, produce &amp; desserts
          </div>
          <div className="space-y-3">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              OEM Cold Chain, Built for Your Products
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              ColdPack Pro designs and builds factory-direct cold rooms and transport systems tuned to
              premium seafood, caviar, fresh produce and desserts—so every shipment arrives export‑ready.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 sm:px-6 sm:text-sm"
            >
              Start OEM Project
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-xs font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900 sm:px-6 sm:text-sm"
            >
              View OEM Programs
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-slate-400 sm:text-xs">
            <span>Seafood &amp; caviar exporters</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Fresh produce &amp; fruit terminals</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Frozen desserts &amp; pastry lines</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur md:max-w-none">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <img
                src="https://pub-cdn.sider.ai/u/U0NWHAAOXO2/web-coder/69c3a2a69c6c5b2879673e18/resource/3c6e4669-ba24-4ec2-994f-a4a87bf3783a.jpg"
                alt="Factory-direct seafood cold storage with export-ready pallets"
                className="h-56 w-full object-cover sm:h-64 md:h-72"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-300 sm:text-xs">
              <div className="rounded-lg bg-slate-900/90 px-2 py-1.5">
                <p className="font-semibold text-slate-50">OEM partnership</p>
                <p className="text-[10px] text-slate-400">Built around your brand &amp; product mix</p>
              </div>
              <div className="rounded-lg bg-slate-900/90 px-2 py-1.5">
                <p className="font-semibold text-slate-50">Product‑specific temps</p>
                <p className="text-[10px] text-slate-400">Seafood, caviar, produce, desserts</p>
              </div>
              <div className="rounded-lg bg-slate-900/90 px-2 py-1.5">
                <p className="font-semibold text-slate-50">7‑day standard</p>
                <p className="text-[10px] text-slate-400">Pre‑defined rooms, fast dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection