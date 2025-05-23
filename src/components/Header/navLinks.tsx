import React from 'react';
import NavLink from '../Buttons/navLink';
import { NavLinkProps, NavLinkVariant } from '@/types';

const NavLinks = (props: { navLinks: NavLinkProps[]; resume: NavLinkProps }) => {
  return (
    <div id="navLinks" className="flex items-center">
      <ol className="flex justify-between items-center">
        {props.navLinks.map((link, _ind) => (
          <li key={link.id} className="relative mr-[5px] text-xs">
            <NavLink href={link.href} label={link.label}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ol>
      <div className="resume">
        <NavLink
          href={props.resume.href}
          label={props.resume.label}
          download={props.resume.download}
          rel={props.resume.rel}
          target={props.resume.target}
          variant={props.resume.variant as NavLinkVariant}
        >
          {props.resume.label}
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
