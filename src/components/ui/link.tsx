import { linkVariants } from '@/lib/cva/links';
import { CustomLinkProps } from '@/types/link';
import { cn } from '@/utils/mergetwConflicts';
import Link from 'next/link';
import React from 'react';

const CustomLink = (props: CustomLinkProps) => {
  const { href, children, className, intent, ...rest } = props;
  return (
    <Link href={href} className={cn(linkVariants({ intent }), className)} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
