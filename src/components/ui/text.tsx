import { TextHeadingVariants, textHeadingVariants } from '@/styles/text';
import { cn } from '@/utils/mergetwConflicts';
import React, { ComponentPropsWithoutRef, ElementType } from 'react';

type TextProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & TextHeadingVariants &
  Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>;

const Text = <T extends ElementType = 'h1'>({ as, variant, className, children, ...rest }: TextProps<T>) => {
  const Component = as || 'h1';

  return (
    <Component className={cn(textHeadingVariants({ variant }), className)} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
