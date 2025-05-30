import NavLink from "@/components/Buttons/navLink";
import SectionWrapper from "@/components/Wrappers/section";
import SectionHeader from "@/components/Wrappers/sectionHeader";
import { headerNavLinks, projectsData } from "@/data";
import { NavLinkVariant } from "@/types";
import Image from "next/image";

export default function Home() {
  const {
    biglink: { href, label, rel, target, variant },
    sayHello,
  } = headerNavLinks;

  return (
    <>
      <SectionWrapper id="home">
        <div>
          <h1>Hi, my name is</h1>
        </div>
        <div>
          <h2>Gopi Muppuri.</h2>
        </div>
        <div>
          <h3>I build things for the web.</h3>
        </div>
        <div>
          <p>
            Experienced MERN stack developer with hands-on experience in
            developing robust web applications. Proficient in{" "}
            <span>Node.js</span> ,<span>React.js</span> ,<span>Python</span> and
            database management systems like <span>MySQL</span> and{" "}
            <span> MongoDB</span>. Skilled in creating visually appealing
            interfaces and collaborating with cross-functional teams to deliver
            high-quality solutions.
          </p>
        </div>
        <div className="border">
          <NavLink
            href={href}
            rel={rel}
            target={target}
            label={label}
            variant={variant as NavLinkVariant}
          >
            {label}
          </NavLink>
        </div>
      </SectionWrapper>
      <SectionWrapper id="about">
        <div className="relative">
          <SectionHeader value="About Me" />
          <div>
            <div>
              Hello! My name is Gopi, and I love building things for the web. My
              web development journey began in 2022 when I customized a
              website&rsquo;s design. While working on a custom button, I
              learned a lot about HTML and CSS.
            </div>
            <div>
              Fast-forward to today, and I&rsquo;ve had the privilege of working
              at <span>a branding agency </span> , <span>a startup </span> and{" "}
              <span>an advertising company.</span> My main focus these days is
              building accessible, inclusive products and digital experiences at{" "}
              <span>Entitledarts</span> for a variety of clients.
            </div>
            <div>
              Here are a few technologies I&rsquo;ve been working with recently:
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li> React </li>
                <li>Node.js </li>
                <li>Linux (Redhat)</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div>
            <figure>
              <Image
                src="/personal.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </figure>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="exp">
        <SectionHeader value="Where I've Worked" />
        <div>
          <>
            <span>
              <strong>Full Stack Developer</strong>{" "}
            </span>
            <span>
              <strong>@ Entitledarts</strong>
            </span>
            <p>2023 - Present</p>
            <ul>
              <li>
                {" "}
                Develop high-quality, reliable code for various client projects,
                including Goudla BlockChain and Haitmi Resort projects.
              </li>
              <li>
                {" "}
                Work with creative directors to research, develop, and design
                technical solutions that meet business needs.
              </li>
              <li>
                {" "}
                Collaborate with designers, project managers, and engineers to
                turn creative ideas into functional products.{" "}
              </li>
              <li>
                {" "}
                Support the engineering team by sharing knowledge, mentoring,
                and fostering teamwork.
              </li>
            </ul>
          </>
        </div>
      </SectionWrapper>
      <SectionWrapper id="work">
        <SectionHeader value="Some Things I've Built" />
        {projectsData.projects?.map((obj, ind) => {
          return (
            <article key={obj.id}>
              <div>
                <p>Featured Project</p>
                <h4>{obj.title}</h4>
                <div>{obj.description}</div>
                <ul>
                  {obj.tags.map((val, ind) => (
                    <li key={ind}>{val}</li>
                  ))}
                </ul>
                {/* <Link url={obj.links[1]}>
                  <FontAwesomeIcon icon={faGithub} title="Github" />
                </Link> */}
              </div>
              <figure>
                <Image
                  src={obj.mainImageUrl.url}
                  alt={obj.mainImageUrl.alt}
                  width={500}
                  height={500}
                />
              </figure>
            </article>
          );
        })}
      </SectionWrapper>
      <SectionWrapper id="contact">
        <div>
          <header>04.What&rsquo;s Next?</header>
          <h2>Get In Touch </h2>
          <p>
            Although I&rsquo;m not currently looking for any new opportunities,
            my inbox is always open. Whether you have a question or just want to
            say hi, I&rsquo;ll try my best to get back to you!
          </p>
          <div className="border">
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
        </div>
      </SectionWrapper>
    </>
  );
}
