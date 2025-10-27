import React, { useState } from 'react';

const Showcase = () => {
  const [position, setPosition] = useState(50);

  return (
    <section id="showcase" className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Before / After</h2>
          <p className="mt-3 text-slate-300">Plain product photo vs. Promatic futuristic render</p>
        </div>

        {/* Interactive Before/After Slider */}
        <div className="relative mx-auto h-[380px] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1600&auto=format&fit=crop"
            alt="Plain product"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1610312276990-0a7b1f2b03df?q=80&w=1600&auto=format&fit=crop"
              alt="Cinematic product"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-transparent" />
          </div>
          {/* Slider Handle */}
          <div
            className="absolute inset-y-0 flex items-center"
            style={{ left: `calc(${position}% - 10px)` }}
          >
            <div className="h-[380px] w-0.5 bg-white/80 shadow" />
            <div className="ml-2 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-slate-800 shadow">Drag</div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(parseInt(e.target.value))}
            className="absolute bottom-4 left-1/2 z-10 w-2/3 -translate-x-1/2 cursor-ew-resize appearance-none bg-transparent"
            aria-label="Before After Slider"
          />
          <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            Before
          </div>
          <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            After
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-semibold text-white">Use Cases</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Marketplaces', desc: 'Amazon, Etsy, eBay', icon: '🛒' },
              { title: 'Webshops', desc: 'Shopify, WooCommerce', icon: '🛍️' },
              { title: 'Social & Ads', desc: 'Instagram, TikTok, Meta Ads', icon: '📣' },
              { title: 'Branding', desc: 'Flyers, packaging, OOH', icon: '🖨️' },
              { title: 'Menus & Catalogs', desc: 'Restaurants, cafés, retail', icon: '📔' },
              { title: 'Special Projects', desc: 'Campaigns, posters, custom', icon: '✨' },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-black p-6 transition hover:-translate-y-0.5 hover:shadow-xl">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                <div className="mt-4 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
