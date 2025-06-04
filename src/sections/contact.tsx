import NavLink from '@/components/Buttons/navLink';
import SectionWrapper from '@/components/Wrappers/section';
import { headerNavLinks } from '@/data';
import { NavLinkVariant } from '@/types';
import React from 'react';

const Contact = () => {
  const { sayHello } = headerNavLinks;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Contact;
