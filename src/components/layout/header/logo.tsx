import React from 'react';
import Loader from '../../Loaders/loader';
import { HeaderData } from '@/types';
import CustomLink from '@/components/ui/link';

const Logo = (props: HeaderData) => {
  const { href, variant } = props;
  return (
    <div id="logo" className="relative">
      <CustomLink href={`${href}`} intent={variant}>
        <Loader />
      </CustomLink>
    </div>
  );
};

export default Logo;
