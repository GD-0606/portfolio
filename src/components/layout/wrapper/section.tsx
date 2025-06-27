import { SectionWrapperProps } from '@/types';
import React from 'react';
import clsx from 'clsx';
import { cn } from '@/utils/mergetwConflicts';
const SectionWrapper = (props: SectionWrapperProps) => {
  const { id, children, className = '' } = props;

  return (
    <section
      id={id}
      className={cn('relative mx-auto w-full min-h-screen py-[100px] max-w-[1000px] max-tabletL:max-w-none max-tabletL:mx-0', className)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
