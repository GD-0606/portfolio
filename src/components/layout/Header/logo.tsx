import React from 'react';
import NavLink from '../../Buttons/navLink';
import Loader from '../../Loaders/loader';
import { NavLinkProps, NavLinkVariant } from '@/types';

const Logo = (props: NavLinkProps) => {
  const { href, label, variant } = props;
  return (
    <div id="logo" className="relative">
      <NavLink href={`${href}`} label={`${label}`} variant={variant as NavLinkVariant}>
        <Loader />
      </NavLink>
    </div>
  );
};

export default Logo;
