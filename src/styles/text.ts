import { cva, type VariantProps } from 'class-variance-authority';

export const textHeadingVariants = cva('', {
  variants: {
    variant: {
      h1: 'mb-[10px] font-semibold text-lightest-slate text-big-heading',
      h2: 'mb-[10px] font-semibold text-lightest-slate text-medium-heading',
      h3: 'mb-[10px] font-semibold text-lightest-slate text-number-heading',
      h4: 'mb-[10px] font-semibold text-lightest-slate text-w-h3-heading',
      h5: 'mb-[10px] font-semibold text-lightest-slate text-h1-heading',
      
    }
  },
  defaultVariants: {
    variant: 'h1'
  }
});
export type TextHeadingVariants = VariantProps<typeof textHeadingVariants>;
