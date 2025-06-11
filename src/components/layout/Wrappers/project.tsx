import { ProjectWrapperProps } from '@/types';
import React from 'react';

const ProjectWrapper = (props: ProjectWrapperProps) => {
  const { children } = props;
  return <ul className='wrapper'>{children}</ul>;
};

export default ProjectWrapper;
