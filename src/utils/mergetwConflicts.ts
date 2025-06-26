import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['big-heading', 'medium-heading', 'number-heading', 'w-h3-heading', 'h1-heading', 'xxs', 'xxl', 'heading']
    }
  }
});
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
