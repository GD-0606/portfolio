import NavLink from '@/components/Buttons/navLink';
import NextImage from '@/components/Image/image';
import ListItemElement from '@/components/ListElement/listElement';
import SectionWrapper from '@/components/Wrappers/section';
import SectionHeader from '@/components/Wrappers/sectionHeader';
import { aboutPageData, headerNavLinks, projectsData } from '@/data';
import { NavLinkVariant } from '@/types';
import Image from 'next/image';

export default function Home() {
  const {
    biglink: { href, label, rel, target, variant },
    sayHello
  } = headerNavLinks;
  const { skills, aboutImageUrl } = aboutPageData;

  return (
    <>
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
      <SectionWrapper id="work">
        <SectionHeader value="Some Things I've Built" />

        {projectsData.projects?.map((obj, _ind) => {
          return (
            <article key={obj.id} className="border border-amber-600">
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
                <Image src={obj.mainImageUrl.url} alt={obj.mainImageUrl.alt} width={500} height={500} className='w-full'/>
              </div>
            </article>
          );
        })}
      </SectionWrapper>
      <SectionWrapper id="contact" className="max-w-[600px] mt-0 mb-[100px] text-center">
        <h3 className="text-green">04. What&rsquo;s Next?</h3>
        <h2 className="text-medium-heading">Get In Touch </h2>
        <p>
          Although I&rsquo;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say
          hi, I&rsquo;ll try my best to get back to you!
        </p>
        <div>
          <NavLink
            href={sayHello.href}
            rel={sayHello.rel}
            target={sayHello.target}
            label={sayHello.label}
            variant={sayHello.variant as NavLinkVariant}
          >
            {sayHello.label}
          </NavLink>
        </div>
      </SectionWrapper>
    </>
  );
}
