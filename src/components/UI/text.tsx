import { TextHeadingProps } from '@/styles/text';
import React from 'react';

const Text = (props: TextHeadingProps) => {
  const { as: Component = 'h1', variant, className, children } = props;
  return <Component className={''}>{children}</Component>;
};

export default Text;
