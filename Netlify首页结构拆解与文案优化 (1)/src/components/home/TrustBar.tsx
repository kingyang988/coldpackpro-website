/**
 * TrustBar.tsx
 * Displays quick trust metrics and benefits immediately under the hero.
 * Tailored to highlight ColdPack Pro's factory-direct OEM reliability.
 */

import type React from 'react'

/**
 * TrustBar
 * Shows a compact list of key assurances such as OEM manufacturing and food-grade integrity.
 */
const TrustBar: React.FC = () => {
  const items: string[] = [
    'Factory-direct OEM manufacturing',
    'Engineered for seafood, caviar, produce &amp; desserts',
    'Export-grade food safety &amp; traceability',
    '24h response from cold-chain engineers',
  ]

  return (
    <section className="border-b border-slate-900 bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-4 sm:text-[13px]">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar