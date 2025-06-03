import clsx from 'clsx';
import React from 'react';

const ListItemElement = (props: { children: React.ReactNode; to: string }) => {
  const { children, to } = props;
  const base = clsx(
    "before:content-['▹'] before:absolute before:left-0 before:top-[1px] before:text-green relative mb-[10px]",
    to === 'about' && 'before:text-sm before:leading-[12px] pl-[20px] font-mono text-sm',
    to === 'exp' && 'pl-[30px]'
  );

  return <li className={clsx(base, to)}>{children}</li>;
};

export default ListItemElement;
