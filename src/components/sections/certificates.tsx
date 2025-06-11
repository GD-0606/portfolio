import CertificateItem from '@/components/Certificate/certificateItem';
import CertificateWrapper from '@/components/layout/Wrappers/certificate';
import SectionWrapper from '@/components/layout/Wrappers/section';
import SectionHeader from '@/components/layout/Wrappers/sectionHeader';
import React from 'react';

const Certificates = () => {
  return (
    <React.Fragment>
      <SectionWrapper id="certificates">
        <SectionHeader value="Certificates" />
        <CertificateWrapper>
          <li className="certificate-item">
            <CertificateItem title="test" link="./" />
          </li>
          <li className="certificate-item">
            <CertificateItem title="test" link="./" />
          </li>
          <li className="certificate-item">
            <CertificateItem title="test" link="./" />
          </li>
          <li className="certificate-item">
            <CertificateItem title="test" link="./" />
          </li>
        </CertificateWrapper>
      </SectionWrapper>
    </React.Fragment>
  );
};

export default Certificates;
