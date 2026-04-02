/**
 * FAQSection.tsx
 * Frequently asked questions regarding timeline, compliance, installation, monitoring and onboarding.
 */

import type React from 'react'

interface FAQItem {
  /** Question text. */
  question: string
  /** Short, single-sentence answer. */
  answer: string
}

/**
 * FAQSection
 * Renders concise QA pairs to address common OEM cold-chain project concerns.
 */
const FAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: 'How fast can a standard system be shipped?',
      answer:
        'Most 7-day standard room configurations can be prepared and dispatched within 7 business days once scope and slot are confirmed.',
    },
    {
      question: 'Can you meet seafood and food safety requirements?',
      answer:
        'Yes, we design systems aligned with export seafood, caviar, fresh produce and dessert regulations, including relevant EU, US and local food-grade standards.',
    },
    {
      question: 'Do you support on-site installation and commissioning?',
      answer:
        'For many regions we coordinate installation partners and support commissioning remotely or on-site, depending on your sites and project scope.',
    },
    {
      question: 'Do your solutions integrate with sensors and monitoring?',
      answer:
        'We can integrate with your existing monitoring platforms or provide sensor and data options as part of the OEM project.',
    },
    {
      question: 'How do we start an OEM cold-chain project?',
      answer:
        'Click “Start OEM Project”, share your products, volumes and export routes, and our team will respond within 24 hours with next steps.',
    },
  ]

  return (
    <section id="faq" className="border-b border-slate-900 bg-slate-950" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-14">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            Answers for OEM seafood, caviar, produce and dessert brands
          </h2>
          <p className="mt-2 text-xs text-slate-400 sm:text-sm">
            If you don&apos;t see your question here, reach out and a ColdPack Pro engineer will reply
            within one business day.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm text-slate-50">
                <span>{item.question}</span>
                <span className="text-xs text-slate-400 group-open:hidden">+</span>
                <span className="hidden text-xs text-slate-400 group-open:inline">−</span>
              </summary>
              <p className="mt-2 text-xs text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection