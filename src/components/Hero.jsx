import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability gradient (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,#3b82f61f,transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-slate-200/80">Promatic AI Studio</p>
        <h1 className="mb-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          Modern Product Imagery. Built for Conversion.
        </h1>
        <p className="mb-10 max-w-2xl text-slate-200/90 md:text-lg">
          Futuristic 3D and AI-crafted visuals in 48h — sleek, minimal, and on brand.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href="#packages" className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-slate-100">See Packages</a>
          <a href="#start" className="rounded-full border border-white/30 px-6 py-3 text-white transition hover:bg-white/10">Start Project</a>
        </div>
        <p className="mt-10 max-w-2xl text-xs text-slate-300/70">
          We work only with responsible brands. No alcohol, gambling, tobacco, or harmful industries.
        </p>
      </div>
    </section>
  );
};

export default Hero;
