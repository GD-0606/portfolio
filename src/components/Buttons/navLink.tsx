import { NavLinkProps, NavLinkVariant } from '@/types';
import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, label, variant = 'default', rel, target, download = false, children }: NavLinkProps) => {
  const variants: Record<NavLinkVariant, string> = {
    default: 'border border-green-500 p-2 inline-block',
    download: 'border border-green-500 p-2 inline-block',
    logo: ''
  };

  return (
    <Link href={href} download={download && 'Resume.pdf'} rel={rel} target={target} id={label} className={`${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default NavLink;
