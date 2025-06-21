'use client';
import React from 'react';
import { headerNavLinks } from '@/data';
import Logo from './logo';
import NavLinks from './navLinks';
import { HeaderData } from '@/types';
import Menubar from './menubar';
import { headerStyles } from '@/lib/cva/header';
import { navbarStyles } from '@/lib/cva/navbar';


const Header = () => {
  const { logo, navLinks, resume } = headerNavLinks;

  return (
    <header className={headerStyles()}>
      <nav className={navbarStyles()}>
        <Logo {...(logo as HeaderData)} />
        <NavLinks navLinks={navLinks as HeaderData[]} resume={resume as HeaderData} />
        <Menubar />
      </nav>
    </header>
  );
};

export default Header;
