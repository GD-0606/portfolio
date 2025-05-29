import React from 'react';
import NavLink from '../Buttons/navLink';
import { NavLinkProps, NavLinkVariant } from '@/types';

const NavLinks = (props: { navLinks: NavLinkProps[]; resume: NavLinkProps }) => {
  return (
    <div id="navLinks" className="border relative flex justify-between gap-2">
      <ol className="border border-red-900 flex justify-between items-center gap-1 text-xs">
        {props.navLinks.map((link, _ind) => (
          <li key={link.id} className="relative">
            <NavLink href={link.href} label={link.label}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ol>
      <div className="border border-yellow-300">
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
