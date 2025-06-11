import About from '@/components/sections/about';
import Certificates from '@/components/sections/certificates';
import Contact from '@/components/sections/contact';
import Exp from '@/components/sections/exp';
import Home from '@/components/sections/home';
import Projects from '@/components/sections/projects';
import Work from '@/components/sections/work';
import React from 'react';

export default function Sections() {
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
