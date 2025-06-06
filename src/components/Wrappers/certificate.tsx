import React from 'react';

const CertificateWrapper = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <ul className="wrapper">{children}</ul>;
};

export default CertificateWrapper;
