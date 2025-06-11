import React from 'react';

const SectionHeader = ({ value }: { value: string }) => {
  return <h2 className="relative w-full flex items-center text-number-heading counter-inc-section-header mt-[10px] mr-0 ml-0 mb-[40px]">{value}</h2>;
};

export default SectionHeader;
