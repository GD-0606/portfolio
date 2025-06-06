import CertificateItem from '@/components/Certificate/certificateItem';
import CertificateWrapper from '@/components/Wrappers/certificate';
import SectionWrapper from '@/components/Wrappers/section';
import SectionHeader from '@/components/Wrappers/sectionHeader';
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
