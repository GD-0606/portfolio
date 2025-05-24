import { NavLinkProps, NavLinkVariant } from '@/types';
import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, label, variant = 'default', rel, target, download = false, children }: NavLinkProps) => {
  const variants: Record<NavLinkVariant, string> = {
    default: 'p-[10px]',
    download: '',
    logo: ''
  };

  return (
    <Link href={href} download={download} rel={rel} target={target} id={label} className={`${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default NavLink;
