import { SectionWrapperProps } from "@/types";
import React from "react";

const SectionWrapper = (props: SectionWrapperProps) => {
  const { id, children } = props;
  return (
    <section
      id={id}
      className="relative mx-auto w-full max-w-[1000px] min-h-screen py-[100px]"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
