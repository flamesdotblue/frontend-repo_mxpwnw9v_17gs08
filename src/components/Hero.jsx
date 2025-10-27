import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-stone-800/20" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-stone-200/80">Promatic AI Studio</p>
        <h1 className="mb-4 max-w-3xl text-4xl font-semibold leading-tight text-stone-50 md:text-6xl">
          Your Product. Center Stage.
        </h1>
        <p className="mb-10 max-w-2xl text-stone-100/90 md:text-lg">
          AI-crafted imagery in 48h — ready for web, ads, socials, or print.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="#packages" className="rounded-full bg-stone-100 px-6 py-3 text-stone-900 transition hover:bg-stone-200">See Packages</a>
          <a href="#start" className="rounded-full border border-stone-200/70 px-6 py-3 text-stone-100 transition hover:bg-stone-800/50">Start Project</a>
        </div>
        <p className="mt-10 max-w-2xl text-xs text-stone-200/70">
          We only work with ethical and responsible products. No alcohol, gambling, tobacco, or harmful industries.
        </p>
      </div>
    </section>
  );
};

export default Hero;
