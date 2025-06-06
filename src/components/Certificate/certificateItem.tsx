import React from 'react';
import IconCertificate from '../Icons/certificate';

const CertificateItem = ({ title, link }: { title: string; link: string }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="icon">
        <IconCertificate />
        <div className="corner"></div>
      </div>
      <div className="content text-lightest-slate">
        <div className="p-2 pb-0 pr-0">
          <p>{title}</p>
        </div>
        <div className="relative flex justify-between flex-nowrap items-end p-2 pb-0 pr-0 ">
          <span className="relative -top-1">Verified</span>
          <svg width="90" height="60" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="30" x="25" y="25" fill="#8892b0" />
            <path d="M15 25 L25 25 L25 40 Z" fill="#8892b0" />
            <path d="M15 55 L25 55 L25 40 Z" fill="#8892b0" />
            <text x="50" y="43" fontSize="15" fill="#ccd6f6" textAnchor="middle" dominantBaseline="middle">
              Skill
            </text>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default CertificateItem;
