import SectionWrapper from '@/components/layout/wrapper/section';
import SectionHeader from '@/components/layout/wrapper/sectionHeader';
import { projectsData } from '@/data';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  const { projects } = projectsData;
  return (
    <React.Fragment>
      <SectionWrapper id="projects">
        <SectionHeader value="Some Things I've Built" />

        {projects.map((obj, _ind) => {
          return (
            <article key={obj.id} className="">
              <div className="content">
                <p className="my-[10px] text-green font-mono font-normal text-sm">Featured Project</p>
                <h3 className="text-lightest-slate text-w-h3-heading relative z-10">{obj.title}</h3>
                <div className="relative z-10 p-[25px] rounded-[4px] bg-light-navy text-light-slate shadow-[0_10px_30px_-15px_rgba(2, 12, 27, 0.7)]">
                  <p>{obj.description}</p>
                </div>
                <ul className="tech-list">
                  {obj.tags.map((tag, ind) => (
                    <li key={tag.id}>{tag.name}</li>
                  ))}
                </ul>
              </div>
              <div className="image">
                <Image src={obj.mainImageUrl.url} alt={obj.mainImageUrl.alt} width={500} height={500} className="w-full" />
              </div>
            </article>
          );
        })}
      </SectionWrapper>
    </React.Fragment>
  );
};

export default Projects;
