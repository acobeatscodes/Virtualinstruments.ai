'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import IndustriesServed from '@/components/sections/IndustriesServed';
import Compliance from '@/components/sections/Compliance';
import CapabilityForm from '@/components/sections/CapabilityForm';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navigation />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Services />
      <IndustriesServed />
      <Compliance />
      <Testimonials />
      <CapabilityForm />
      <CTA />
      <Footer />
    </div>
  );
}
