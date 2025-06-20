import React from 'react';

export type NavLinkVariant = 'default' | 'download' | 'logo' | 'custom';

export interface NavLinkProps {
  id?: number;
  href: string;
  label: string;
  variant?: NavLinkVariant;
  download?: boolean;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export interface HeaderData {
  id?: number;
  href: string;
  label: string;
  variant: 'default' | 'logo' | 'custom';
}
