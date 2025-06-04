import ListItemElement from '@/components/ListElement/listElement';
import SectionWrapper from '@/components/Wrappers/section';
import SectionHeader from '@/components/Wrappers/sectionHeader';
import React from 'react';

const Exp = () => {
  return (
    <React.Fragment>
      <SectionWrapper id="exp" className="max-w-[700px]">
        <SectionHeader value="Where I've Worked" />
        <div className="py-[10px] px-[5px]">
          <h3 className="leading-[1.3] font-medium text-xxl mb-[2px]">
            <span>
              <strong>Full Stack Developer</strong>{' '}
            </span>
            <span>
              <strong>@ Entitledarts</strong>
            </span>
          </h3>

          <p className="mb-[25px] text-light-slate font-mono text-xs">June 2023 - Present</p>
          <div>
            <ul className="p-0 m-0">
              <ListItemElement to="exp">
                {' '}
                Develop high-quality, reliable code for various client projects, including Goudla BlockChain and Haitmi Resort projects.
              </ListItemElement>
              <ListItemElement to="exp">
                {' '}
                Work with creative directors to research, develop, and design technical solutions that meet business needs.
              </ListItemElement>
              <ListItemElement to="exp">
                {' '}
                Collaborate with designers, project managers, and engineers to turn creative ideas into functional products.{' '}
              </ListItemElement>
              <ListItemElement to="exp"> Support the engineering team by sharing knowledge, mentoring, and fostering teamwork.</ListItemElement>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default Exp;
