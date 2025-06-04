import ProjectItem from '@/components/Project/projectItem';
import ProjectWrapper from '@/components/Wrappers/project';
import SectionWrapper from '@/components/Wrappers/section';
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
