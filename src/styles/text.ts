import { cva, type VariantProps } from 'class-variance-authority';
import React, { ComponentPropsWithoutRef, ElementType } from 'react';

const textHeadingVariants = cva('mb-[10px] font-semibold text-lightest-slate', {
  variants: {
    variant: {
      h1: 'text-big-heading',
      h2: 'text-medium-heading',
      h3: 'text-number-heading',
      h4: 'text-w-h3-heading',
      h5: 'text-h1-heading'
    }
  },
  defaultVariants: {
    variant: 'h1'
  }
});
export type TextHeadingVariants = VariantProps<typeof textHeadingVariants>;
export interface TextHeadingProps extends TextHeadingVariants {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
}
