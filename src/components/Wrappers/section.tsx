import { SectionWrapperProps } from '@/types';
import React from 'react';
import clsx from 'clsx';
const SectionWrapper = (props: SectionWrapperProps) => {
  const { id, children, className = '' } = props;
  const hasMaxWidth = className.includes('max-w');
  const base = clsx('border crelative mx-auto w-full min-h-screen py-[100px]', !hasMaxWidth && 'max-w-[1000px]');

  return (
    <section id={id} className={clsx(base, className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
