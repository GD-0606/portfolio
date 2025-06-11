import NextImage from '@/components/Image/image';
import ListItemElement from '@/components/ListElement/listElement';
import SectionWrapper from '@/components/layout/Wrappers/section';
import SectionHeader from '@/components/layout/Wrappers/sectionHeader';
import { aboutPageData } from '@/data';
import React from 'react';

const About = () => {
  const { skills, aboutImageUrl } = aboutPageData;
  return (
    <React.Fragment>
      <SectionWrapper id="about" className="max-w-[900px]">
        <SectionHeader value="About Me" />
        <div className="relative grid grid-cols-[3fr_2fr] gap-[50px]">
          <div className="relative">
            <div>
              <p className="mb-[20px]">
                Hello! My name is Gopi, and I love building things for the web. My web development journey began in 2022 when I customized a
                website&rsquo;s design. While working on a custom button, I learned a lot about HTML and CSS.
              </p>
              <p className="mb-[20px]">
                Fast-forward to today, and I&rsquo;ve had the privilege of working at <span>a branding agency </span> , <span>a startup </span> and{' '}
                <span>an advertising company.</span> My main focus these days is building accessible, inclusive products and digital experiences at{' '}
                <span>Entitledarts</span> for a variety of clients.
              </p>
              <p>Here are a few technologies I&rsquo;ve been working with recently:</p>
            </div>
            <ul className="grid [grid-template-columns:repeat(2,minmax(140px,200px))] gap-y-0 gap-x-[10px] p-0 mt-5">
              {skills.map((skill) => (
                <ListItemElement key={skill.id} to="about">
                  {skill.name}
                </ListItemElement>
              ))}
            </ul>
          </div>
          <div className="relative max-w-[300px]">
            <div className="about-image-wrapper">
              <NextImage url={aboutImageUrl} alt="Picture of the author" className="img" fill={true} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default About;
