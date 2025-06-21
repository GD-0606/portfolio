import React from 'react';
import { HeaderData } from '@/types';
import CustomLink from '@/components/ui/link';
import styles from './header.module.css';

const NavLinks = (props: { navLinks: HeaderData[]; resume: HeaderData }) => {
  return (
    <div id="navLinks" className="max-tabletL:hidden border relative flex justify-between items-center gap-5 text-xs">
      <ol className={`flex justify-between items-center gap-5 ${styles.counter_reset}`}>
        {props.navLinks.map((link, _ind) => (
          <li key={link.id} className="relative border border-amber-500">
            <CustomLink href={link.href} className={`${styles.counter_inc}`}>
              {link.label}
            </CustomLink>
          </li>
        ))}
      </ol>
      <div className="">
        <CustomLink href={props.resume.href} intent={props.resume.variant} download={true} target="_blank" rel="noopener noreferrer">
          {props.resume.label}
        </CustomLink>
      </div>
    </div>
  );
};

export default NavLinks;
