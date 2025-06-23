'use client';
import React, { useState } from 'react';
import { headerNavLinks } from '@/data';
import Logo from './logo';
import NavLinks from './navLinks';
import { HeaderData } from '@/types';
import Menubar from './menubar';
import { headerStyles } from './header.styles';
import { navbarStyles } from './header.styles';

const Header = () => {
  const { logo, navLinks, resume } = headerNavLinks;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={headerStyles()}>
      <nav className={navbarStyles()}>
        <Logo {...(logo as HeaderData)} />
        <NavLinks navLinks={navLinks as HeaderData[]} resume={resume as HeaderData} isMenuOpen={isMenuOpen} />
        <Menubar {...{ isMenuOpen, setIsMenuOpen }} />
      </nav>
    </header>
  );
};

export default Header;
