/**
 * TemplatesSection.tsx
 * Displays available OEM program options as cards with short descriptions.
 * Focused on seafood, caviar, fresh produce and dessert operations.
 */

import type React from 'react'

interface TemplateItem {
  /** Solution or package name. */
  name: string
  /** Supporting description. */
  description: string
  /** Call-to-action label for the card. */
  cta: string
}

/**
 * TemplatesSection
 * Highlights four key OEM program types for premium food cold-chain.
 */
const TemplatesSection: React.FC = () => {
  const templates: TemplateItem[] = [
    {
      name: 'Seafood Export Hubs',
      description: 'Blast chill, freezing and cold storage for whole fish and fillets.',
      cta: 'View Layouts',
    },
    {
      name: 'Caviar &amp; Fine Foods',
      description: 'Tight temperature bands for high-value tins, roe and delicacies.',
      cta: 'See Specs',
    },
    {
      name: 'Fresh Produce Terminals',
      description: 'Humidity-controlled rooms for fruits, vegetables and herbs.',
      cta: 'Explore',
    },
    {
      name: 'Dessert &amp; Pastry Lines',
      description: 'Cold prep, holding and display-ready storage for sweets.',
      cta: 'Get Quote',
    },
  ]

  return (
    <section
      id="solutions"
      className="border-b border-slate-900 bg-slate-950"
      aria-labelledby="templates-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              OEM programs
            </p>
            <h2
              id="templates-heading"
              className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
            >
              Pre‑engineered cold-chain for premium food categories
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-400 sm:text-sm">
            Start from proven OEM configurations for seafood, caviar, fresh produce and desserts, then
            fine‑tune them to your volumes, SKUs and export markets.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {templates.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-sm shadow-black/30"
            >
              <div className="relative h-36 w-full overflow-hidden border-b border-slate-800 bg-slate-950 sm:h-40">
                <img
                  src="https://pub-cdn.sider.ai/u/U0NWHAAOXO2/web-coder/69c3a2a69c6c5b2879673e18/resource/8e8eef90-ee4b-4d25-be98-da86821a9ed3.jpg"
                  alt={item.name.replace(/&amp;/g, '&')}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                <div>
                  <h3
                    className="text-sm font-semibold text-slate-50"
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  />
                  <p
                    className="mt-1 text-xs text-slate-300"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-xs font-semibold text-slate-50 hover:bg-slate-700"
                  >
                    {item.cta}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TemplatesSection