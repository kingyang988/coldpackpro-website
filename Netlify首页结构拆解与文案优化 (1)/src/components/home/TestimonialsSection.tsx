/**
 * TestimonialsSection.tsx
 * Showcases a short testimonial quote as social proof.
 */

import type React from 'react'

/**
 * TestimonialsSection
 * Displays a concise testimonial and optional case study CTA, focused on premium food exporters.
 */
const TestimonialsSection: React.FC = () => {
  return (
    <section className="border-b border-slate-900 bg-slate-950" aria-labelledby="testimonial-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Results</p>
            <h2
              id="testimonial-heading"
              className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
            >
              Premium products stay premium when OEM engineering meets cold-chain logistics
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              &quot;ColdPack Pro helped us standardize seafood and caviar sites across three ports and cut
              temperature deviation incidents by over 40% in the first quarter.&quot;
            </p>
            <p className="mt-1 text-xs text-slate-400">
              — Export Director, Premium Seafood &amp; Fine Foods Brand
            </p>
            <div className="mt-5">
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-slate-500"
              >
                Read Case Studies
              </a>
            </div>
          </div>
          <div className="relative h-40 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 sm:h-44">
            <img
              src="https://pub-cdn.sider.ai/u/U0NWHAAOXO2/web-coder/69c3a2a69c6c5b2879673e18/resource/759976c5-3ecf-4a63-aacf-552ac6b0a3f9.jpg"
              alt="Team coordinating premium seafood and fine foods cold-chain at an export dock"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection