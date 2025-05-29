import { SectionWrapperProps } from "@/types";
import React from "react";

const SectionWrapper = (props: SectionWrapperProps) => {
  const { id, children } = props;
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-[1000px] min-h-screen py-[100px] max-mobileS:border-amber-200 max-mobileM:border-blue-900"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
