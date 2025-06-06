import About from '@/sections/about';
import Certificates from '@/sections/certificates';
import Contact from '@/sections/contact';
import Exp from '@/sections/exp';
import Home from '@/sections/home';
import Projects from '@/sections/projects';
import Work from '@/sections/work';
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
