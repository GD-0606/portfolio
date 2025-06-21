import { LinksVariantProps } from '@/lib/cva/links';
import React from 'react';

export type CustomLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & LinksVariantProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;
