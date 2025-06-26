import React from 'react';
export interface HeaderData {
  id?: number;
  href: string;
  label: string;
  variant: 'default' | 'logo' | 'custom';
}
