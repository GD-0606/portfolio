import { cva, type VariantProps } from 'class-variance-authority';

export const linkVariants = cva('inline-block', {
  variants: {
    intent: {
      default: 'border p-2',
      logo: '',
      custom:
        'border-1 border-green rounded px-4 py-3.5  text-green bg-transparent hover:-translate-[4px] hover:shadow-custom1 transition-all duration-[0.25s] ease-easing'
    }
  },
  defaultVariants: {
    intent: 'default'
  }
});

export type LinksVariantProps = VariantProps<typeof linkVariants>;
