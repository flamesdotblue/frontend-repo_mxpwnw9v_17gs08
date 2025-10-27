import React, { useState } from 'react';

const QA = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-stone-200 bg-white">
      <button
        className="flex w-full items-center justify-between px-4 py-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-stone-900">{q}</span>
        <span className="ml-4 text-stone-600">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-stone-700">{a}</div>}
    </div>
  );
};

const FAQAndFinalCTA = () => {
  return (
    <section className="relative w-full">
      {/* FAQ */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h3 className="mb-8 text-center text-2xl font-semibold text-stone-900">FAQ</h3>
        <div className="space-y-3">
          <QA q="Commercial usage rights" a="All packages include commercial usage rights for web, ads, social, and print." />
          <QA q="Marketplace compatibility" a="Deliverables are tailored for Amazon, Etsy, eBay and more with correct sizes and backgrounds." />
          <QA q="Delivery time & revisions" a="Standard delivery in 48–72h. Includes one round of light revisions to ensure consistency." />
          <QA q="Editing flexibility" a="Images can be edited in CapCut, Canva, or Photoshop for text overlays, crops, and minor color tweaks." />
          <QA q="Ethical policy" a="We do not create content for alcohol, gambling, tobacco, or harmful industries. Integrity and trust are our foundation." />
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,#ffffff14,transparent)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h3 className="text-3xl font-semibold text-stone-50 md:text-4xl">Don’t just show your product. Make it unforgettable.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-stone-200">Cinematic visuals crafted fast — designed to convert on marketplaces, webshops, and campaigns.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#start" className="rounded-full bg-stone-100 px-6 py-3 text-stone-900 transition hover:bg-stone-200">Start Now</a>
            <a href="#packages" className="rounded-full border border-stone-200/70 px-6 py-3 text-stone-100 transition hover:bg-stone-800/50">See Packages</a>
          </div>
        </div>
      </div>

      <footer className="bg-stone-900 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Promatic AI Studio — Ethical visuals, product-first.
      </footer>
    </section>
  );
};

export default FAQAndFinalCTA;
