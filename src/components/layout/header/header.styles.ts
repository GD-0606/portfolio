import { cva } from 'class-variance-authority';

export const headerStyles = cva([
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
export const navbarStyles = cva(['relative', 'w-full', 'h-full', 'flex', 'justify-between', ' items-center']);
export const NavLinkContainer = cva(' relative flex justify-between items-center gap-5 text-xs', {
  variants: {
    isMenuOpen: {
      true: 'block fixed top-0 right-0 bottom-0 left-0 w-full h-screen bg-navy',
      false: 'max-tabletL:hidden'
    }
  }
});
export const NavLinkItem1 = cva('relative flex justify-between items-center gap-5 ', {
  variants: {
    isMenuOpen: {
      true: 'w-10/12 h-10/12 flex-col bg-lightest-navy',
      false: ''
    }
  }
});

export const NavLinkItem1ChildItem = cva('relative', {
  variants: {
    isMenuOpen: {
      true: 'w-full h-1/4 flex justify-center items-center',
      false: ''
    }
  }
});

export const NavLinkItem2 = cva('', {
  variants: {
    isMenuOpen: {
      true: 'w-10/12  h-2/12  flex justify-center items-center bg-lightest-navy',
      false: ''
    }
  }
});
