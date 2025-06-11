import NavLink from '@/components/Buttons/navLink';
import Text from '@/components/UI/text';
import SectionWrapper from '@/components/layout/Wrappers/section';
import { headerNavLinks } from '@/data';
import { NavLinkVariant } from '@/types';
import React from 'react';

const Home = () => {
  const { biglink } = headerNavLinks;
  const { href, label, rel, target, variant } = biglink;
  return (
    <React.Fragment>
      <SectionWrapper id="home">
        <div className="">
          <h1 className="mb-[30px] ml-[4px] mt-[10px] text-green font-mono font-normal text-h1-heading">Hi, my name is</h1>
        </div>
        <div className="">
          <h2 className="text-big-heading m-0">Gopi Muppuri.</h2>
        </div>
        <div className="">
          <h3 className="text-big-heading mt-[5px] text-slate leading-[0.9]">I build things for the web.</h3>
        </div>
        <div className="relative">
          <p className="mt-[40px] w-8/12">
            MERN stack developer with 2+ years of experience in building scalable web applications and APIs.Proficient in <span>Node.js</span> ,
            <span>React.js</span> ,<span>MongoDB</span> and <span>Express.js</span>. Strong understanding of RESTFUL architecture microservices and
            cloud-native development. Passionate about writing clean code, learning new technologies and delivering user-centered solutions.
          </p>
        </div>
        <div>
          <NavLink href={href} rel={rel} target={target} label={label} variant={variant as NavLinkVariant}>
            {label}
          </NavLink>
        </div>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default Home;
