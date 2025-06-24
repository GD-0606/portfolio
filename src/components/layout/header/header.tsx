'use client';
import React, { useEffect, useState } from 'react';
import { headerNavLinks } from '@/data';
import Logo from './logo';
import NavLinks from './navLinks';
import { HeaderData } from '@/types';
import Menubar from './menubar';
import { headerStyles } from './header.styles';
import { navbarStyles } from './header.styles';
import styles from './header.module.css';
const Header = () => {
  const { logo, navLinks, resume } = headerNavLinks;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth > 767) {
          setIsMenuOpen(false);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = window.document.documentElement;
      const isBlurNeed = isMenuOpen && window.innerWidth <= 767;
      html.classList.toggle(`${styles.blur}`, isBlurNeed);
    }
  }, [isMenuOpen]);
  return (
    <header className={headerStyles()}>
      <nav className={navbarStyles()}>
        <Logo {...(logo as HeaderData)} />
        <NavLinks navLinks={navLinks as HeaderData[]} resume={resume as HeaderData} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menubar {...{ isMenuOpen, setIsMenuOpen }} />
      </nav>
    </header>
  );
};

export default Header;
