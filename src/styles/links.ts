import { cva } from 'class-variance-authority';
export const linkVariants = cva('inline-block', {
  variants: {
    variant: {
      default: 'p-2',
      logo: '',
      navLink: '',
    }
  }
});
