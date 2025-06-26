'use client';
import About from '@/components/sections/about';
import Certificates from '@/components/sections/certificates';
import Contact from '@/components/sections/contact';
import Exp from '@/components/sections/exp';
import Home from '@/components/sections/home';
import Projects from '@/components/sections/projects';
import Work from '@/components/sections/work';
import React, { useEffect } from 'react';

export default function Sections() {
  useEffect(() => {
    if (!window) return;
    if (!window.location.hash.startsWith('#')) return;
    // find the section related to the href
    const section = document.querySelector(window.location.hash);
    if (!section) return;
    const NAVBAR_OFFSET = 100;
    const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }, []);
  return (
    <React.Fragment>
      <Home />
      <About />
      <Exp />
      <Projects />
      <Work />
      <Certificates />
      <Contact />
    </React.Fragment>
  );
}
