import SectionWrapper from '@/components/layout/wrapper/section';
import { headerNavLinks } from '@/data';
import React from 'react';
import CustomLink from '../ui/link';

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
        <div className="my-[10px]">
          <CustomLink href={sayHello.href} target="_blank" rel="noopener noreferrer" intent={sayHello.variant as 'custom'}>
            {sayHello.label}
          </CustomLink>
        </div>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default Contact;
