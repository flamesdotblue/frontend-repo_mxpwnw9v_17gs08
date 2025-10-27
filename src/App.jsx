import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Packages from './components/Packages';
import FAQAndFinalCTA from './components/FAQAndFinalCTA';

function App() {
  return (
    <div className="min-h-screen scroll-smooth font-[Inter] bg-black text-white">
      <Hero />
      <Showcase />
      <Packages />
      <FAQAndFinalCTA />
    </div>
  );
}

export default App;
