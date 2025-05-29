'use client';
import React from 'react';
import { headerNavLinks } from '@/data';
import Logo from './logo';
import NavLinks from './navLinks';
import { NavLinkProps } from '@/types';
import Menubar from './menubar';

const Header = () => {
  const { logo, navLinks, resume } = headerNavLinks;

  return (
    <header className="bg-header border backdrop-blur-[10px] w-full h-[100px] fixed top-0  px-[50px] z-20">
      <nav className="relative w-full h-[100px] flex justify-between items-center text-light-slate font-mono">
        <Logo {...(logo as NavLinkProps)} />
        <NavLinks navLinks={navLinks as NavLinkProps[]} resume={resume as NavLinkProps} />
        <Menubar />
      </nav>
    </header>
  );
};

export default Header;
