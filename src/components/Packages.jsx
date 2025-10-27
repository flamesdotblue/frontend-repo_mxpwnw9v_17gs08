import React, { useEffect, useState } from 'react';

const PackageCard = ({ name, price, features, highlight }) => (
  <div className={`relative rounded-2xl border p-6 transition ${
    highlight ? 'border-stone-900 bg-stone-900 text-stone-50 shadow-xl' : 'border-stone-200 bg-white'
  }`}>
    {highlight && (
      <div className="absolute -top-3 right-4 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-900">Popular</div>
    )}
    <h4 className={`text-xl font-semibold ${highlight ? 'text-stone-50' : 'text-stone-900'}`}>{name}</h4>
    <div className="mt-2 flex items-baseline gap-2">
      <span className={`text-3xl font-semibold ${highlight ? 'text-stone-50' : 'text-stone-900'}`}>{price}</span>
    </div>
    <ul className="mt-4 space-y-2 text-sm">
      {features.map((f) => (
        <li key={f} className={`flex items-start gap-2 ${highlight ? 'text-stone-100/90' : 'text-stone-700'}`}>
          <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {f}
        </li>
      ))}
    </ul>
    <a
      href="#start"
      className={`mt-6 inline-block w-full rounded-full px-5 py-3 text-center text-sm font-medium transition ${
        highlight ? 'bg-stone-50 text-stone-900 hover:bg-stone-200' : 'border border-stone-300 text-stone-900 hover:bg-stone-50'
      }`}
    >
      Order Now
    </a>
  </div>
);

const Testimonials = () => {
  const quotes = [
    '“+35% more clicks after new visuals.”',
    '“Our conversion rates doubled.”',
    '“Production-quality images without a studio.”',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 text-center">
      <p className="text-lg font-medium text-stone-900 transition">{quotes[index]}</p>
    </div>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="relative w-full bg-gradient-to-b from-stone-50 to-stone-100/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Packages</h2>
          <p className="mt-3 text-stone-600">Premium, transparent pricing for every stage</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PackageCard
            name="Starter"
            price="€249"
            features={["5 images", "Commercial usage rights", "Optimized for web & social"]}
          />
          <PackageCard
            name="Growth"
            price="€699"
            features={["20 images", "Multiple crops & ratios", "Marketplace-ready"]}
            highlight
          />
          <PackageCard
            name="Pro"
            price="€1,499"
            features={["50 images", "5 animations", "Print-ready upscales"]}
          />
        </div>

        {/* Animations Add-On */}
        <div className="mt-16 grid items-center gap-8 rounded-2xl border border-stone-200 bg-white p-6 md:grid-cols-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <video
              className="h-full w-full object-cover"
              src="https://videos.pexels.com/video-files/2792130/2792130-uhd_2560_1440_24fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-stone-900/20 via-transparent to-transparent" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-stone-900">Animations Add-On</h3>
            <p className="mt-2 text-stone-700">Animated loops boost engagement and sales. Perfect for product pages and ads.</p>
            <p className="mt-4 text-lg font-medium text-stone-900">€79 each / €349 for 5-pack</p>
          </div>
        </div>

        {/* How It Works */}
        <div id="start" className="mt-20">
          <h3 className="mb-6 text-center text-2xl font-semibold text-stone-900">How It Works</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { step: '1', title: 'Upload or describe your product.' },
              { step: '2', title: 'Choose style, mood, or setting.' },
              { step: '3', title: 'Get delivery in 48–72h.' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-sm font-medium text-stone-50">{s.step}</div>
                <p className="text-stone-800">{s.title}</p>
              </div>
            ))}
          </div>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default Packages;
