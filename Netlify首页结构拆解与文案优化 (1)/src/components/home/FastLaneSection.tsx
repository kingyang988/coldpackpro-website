/**
 * FastLaneSection.tsx
 * Highlights the 7-day standard fast delivery offering with a focused CTA.
 */

import type React from 'react'

/**
 * FastLaneSection
 * Dedicated section for 7-day standard configurations, tuned to seafood and produce room kits.
 */
const FastLaneSection: React.FC = () => {
  return (
    <section
      id="fast"
      className="border-b border-slate-900 bg-slate-950"
      aria-labelledby="fast-lane-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              7-day standard
            </p>
            <h2
              id="fast-lane-heading"
              className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
            >
              Need it fast? 7‑Day Standard Rooms
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Streamlined scope, fixed specs, factory-built cold rooms for seafood and produce ready to
              ship in 7 business days.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Limited weekly slots — ideal for export seafood hubs, produce terminals and satellite
              dessert sites.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-amber-300/30 hover:bg-amber-200"
              >
                Select 7‑Day Plan
              </a>
              <span className="text-[11px] text-slate-400">
                We&apos;ll confirm configuration and ship window within 24 hours.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  In production
                </span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                  7 business days
                </span>
              </div>
              <div className="grid gap-2 text-[11px] text-slate-300">
                <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <span>Configuration &amp; slot confirmed</span>
                  <span className="text-slate-400">Day 1</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <span>Room build &amp; quality checks</span>
                  <span className="text-slate-400">Days 2–4</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
                  <span>Packing, dispatch &amp; install window</span>
                  <span className="text-slate-400">Days 5–7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FastLaneSection