/**
 * AdvantagesSection.tsx
 * Communicates the core advantages of ColdPack Pro using feature cards, tuned for OEM food cold-chain.
 */

import type React from 'react'

interface AdvantageItem {
  /** Short title of the advantage. */
  title: string
  /** One-line description explaining the benefit. */
  description: string
}

/**
 * AdvantagesSection
 * Renders concise advantage cards emphasizing factory-direct OEM, product-specific engineering and speed.
 */
const AdvantagesSection: React.FC = () => {
  const advantages: AdvantageItem[] = [
    {
      title: 'Factory-Direct OEM',
      description: 'Design, build and ship from our own cold-chain production lines.',
    },
    {
      title: 'Product-Specific Design',
      description: 'Rooms tuned for seafood, caviar, fresh produce and frozen desserts.',
    },
    {
      title: 'Fast Deployment',
      description: 'Standard room kits shipped within 7 business days once scope is locked.',
    },
    {
      title: 'Export-Grade Quality',
      description: 'Consistent build quality for brand-critical, high-value food cargo.',
    },
  ]

  return (
    <section className="border-b border-slate-900 bg-slate-950" aria-labelledby="advantages-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why ColdPack Pro
            </p>
            <h2
              id="advantages-heading"
              className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
            >
              Built for OEM seafood, caviar, produce and dessert brands
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-400 sm:text-sm">
            From export seafood hubs to fine foods and patisserie lines, we engineer cold-chain systems
            around your actual SKUs, routes and quality thresholds.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-sm shadow-black/30"
            >
              <h3 className="text-sm font-semibold text-slate-50">{item.title}</h3>
              <p className="text-xs text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection