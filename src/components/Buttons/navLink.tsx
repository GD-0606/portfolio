import { NavLinkProps, NavLinkVariant } from '@/types';
import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, label, variant = 'default', rel, target, download = false, children }: NavLinkProps) => {
  const variants: Record<NavLinkVariant, string> = {
    default: 'counter-inc p-2 inline-block',
    download: 'border-1 border-green rounded px-4 py-3.5 inline-block text-green bg-transparent',
    logo: '',
    custom: 'border-1 border-green rounded px-4 py-2.5 text-green bg-transparent text-sm inline-block font-mono mt-[50px]'
  };

  return (
    <Link href={href} download={download && 'Resume.pdf'} rel={rel} target={target} id={label} className={`${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default NavLink;
