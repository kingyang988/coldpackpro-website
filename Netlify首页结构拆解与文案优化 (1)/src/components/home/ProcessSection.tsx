/**
 * ProcessSection.tsx
 * Explains the three-step OEM customization process from assessment to factory-direct deployment.
 */

import type React from 'react'

interface ProcessStep {
  /** Step label and order. */
  label: string
  /** Step description in one short line. */
  description: string
}

/**
 * ProcessSection
 * Shows a clear OEM project flow tailored to premium food cold-chain brands.
 */
const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      label: 'Assess &amp; Scope',
      description: 'Map products, volumes, export routes and compliance needs.',
    },
    {
      label: 'Design &amp; Validate',
      description: 'Engineering layouts, load profiles and temperature curves.',
    },
    {
      label: 'Build &amp; Deploy',
      description: 'Factory build, shipment, on-site setup and commissioning.',
    },
  ]

  return (
    <section
      id="process"
      className="border-b border-slate-900 bg-slate-950"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              OEM projects
            </p>
            <h2
              id="process-heading"
              className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
            >
              A clear OEM path from audit to live cold-chain system
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-400 sm:text-sm">
            For seafood, caviar, fresh produce and dessert brands that need more than a standard
            configuration, we run a structured OEM engineering process while keeping decisions and
            timelines transparent.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.label}
              className="relative flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
            >
              <span className="mb-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-semibold text-slate-950">
                {index + 1}
              </span>
              <h3
                className="text-sm font-semibold text-slate-50"
                dangerouslySetInnerHTML={{ __html: step.label }}
              />
              <p className="text-xs text-slate-300">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8">
          <a
            href="#cta"
            className="inline-flex items-center rounded-full border border-cyan-500 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20"
          >
            Start OEM Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection