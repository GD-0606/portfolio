import { cva, type VariantProps } from 'class-variance-authority';

export const linkVariants = cva('inline-block', {
  variants: {
    intent: {
      default: 'border p-2',
      logo: '',
      custom: 'border-1 border-green rounded px-4 py-2.5 text-green bg-transparent'
    }
  },
  defaultVariants: {
    intent: 'default'
  }
});

export type LinksVariantProps = VariantProps<typeof linkVariants>;
