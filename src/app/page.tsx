import SectionWrapper from '@/components/Wrappers/section';

export default function Home() {
  return (
    <>
      <SectionWrapper id="home">
        <h2 className="m-0 text-big-heading">HomePage</h2>
      </SectionWrapper>
      <SectionWrapper id="about">
        <h2 className="m-0 text-big-heading">AboutPage</h2>
      </SectionWrapper>
      <SectionWrapper id="exp">
        <h2 className="text-big-heading">Exp Page</h2>
      </SectionWrapper>
      <SectionWrapper id="work">
        <h2 className="text-big-heading">Work Page</h2>
      </SectionWrapper>
      <SectionWrapper id="contact">
        <h2 className="text-big-heading">Contact Form</h2>
      </SectionWrapper>
    </>
  );
}
