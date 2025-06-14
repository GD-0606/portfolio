import { LinksVariantProps, linkVariants } from '@/lib/cva/links';
import { cn } from '@/utils/mergetwConflicts';
import Link from 'next/link';
import React from 'react';

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & LinksVariantProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

const CustomLink = (props: LinkProps) => {
  const { href, children, className, intent, ...rest } = props;
  return (
    <Link passHref legacyBehavior href={href}>
      <a className={cn(linkVariants({ intent }), className)} {...rest}>{children}</a>
    </Link>
  );
};

export default CustomLink;
