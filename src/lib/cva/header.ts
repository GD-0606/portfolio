import { cva } from 'class-variance-authority';

export const headerStyles = cva([
  'border',
  'bg-header',
  'backdrop-blur-[10px]',
  'w-full',
  'h-[100px]',
  'fixed',
  'top-0',
  'px-[50px]',
  'z-20',
  'text-light-slate',
  'font-mono',
  'font-semibold',
  'tracking-wide'
]);
