import ProjectItem from '@/components/Project/projectItem';
import ProjectWrapper from '@/components/layout/wrapper/project';
import SectionWrapper from '@/components/layout/wrapper/section';
import React from 'react';

const Work = () => {
  return (
    <React.Fragment>
      <SectionWrapper id="work">
        <h2>Other Noteworthy Projects</h2>
        <ProjectWrapper>
          <li>
            <ProjectItem />
          </li>
          <li>
            <ProjectItem />
          </li>
          <li>
            <ProjectItem />
          </li>
          <li>
            <ProjectItem />
          </li>
        </ProjectWrapper>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default Work;
