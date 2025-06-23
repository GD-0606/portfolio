import React from 'react';
import { HeaderData } from '@/types';
import CustomLink from '@/components/ui/link';
import styles from './header.module.css';
import { NavLinkContainer, NavLinkItem1, NavLinkItem1ChildItem, NavLinkItem2 } from './header.styles';
import { cn } from '@/utils/mergetwConflicts';

const NavLinks = (props: { navLinks: HeaderData[]; resume: HeaderData; isMenuOpen: boolean }) => {
  return (
    <div id="navLinks" className={cn(NavLinkContainer({ isMenuOpen: props.isMenuOpen }))}>
      <ol className={cn(NavLinkItem1({ isMenuOpen: props.isMenuOpen }), `${styles.counter_reset}`)}>
        {props.navLinks.map((link, _ind) => (
          <li key={link.id} className={cn(NavLinkItem1ChildItem({ isMenuOpen: props.isMenuOpen }))}>
            <CustomLink href={link.href} className={`${styles.counter_inc} ${props.isMenuOpen && 'before:text-xl text-lg'}`}>
              {link.label}
            </CustomLink>
          </li>
        ))}
      </ol>
      <div className={cn(NavLinkItem2({ isMenuOpen: props.isMenuOpen }))}>
        <CustomLink href={props.resume.href} intent={props.resume.variant} download={true} target="_blank" rel="noopener noreferrer">
          {props.resume.label}
        </CustomLink>
      </div>
    </div>
  );
};

export default NavLinks;
