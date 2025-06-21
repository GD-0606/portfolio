// lib/utils.ts
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
  // console.log(clsx(inputs));
  // console.log(twMerge(clsx(inputs)));

  return twMerge(clsx(inputs));
}
