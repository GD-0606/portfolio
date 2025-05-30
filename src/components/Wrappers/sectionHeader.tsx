import React from 'react';

const SectionHeader = ({ value }: { value: string }) => {
  return <h2 className="relative w-full flex items-center text-number-heading counter-inc-section-header">{value}</h2>;
};

export default SectionHeader;
