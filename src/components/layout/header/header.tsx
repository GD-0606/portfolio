'use client';
import React from 'react';
import { headerNavLinks } from '@/data';
import Logo from './logo';
import NavLinks from './navLinks';
import { NavLinkProps } from '@/types';
import Menubar from './menubar';
import { headerStyles } from '@/lib/cva/header';
import { navbarStyles } from '@/lib/cva/navbar';

const Header = () => {
  const { logo, navLinks, resume } = headerNavLinks;

  return (
    <header className={headerStyles()}>
      <nav className={navbarStyles()}>
        <Logo {...(logo as NavLinkProps)} />
        <NavLinks navLinks={navLinks as NavLinkProps[]} resume={resume as NavLinkProps} />
        <Menubar />
      </nav>
    </header>
  );
};

export default Header;
