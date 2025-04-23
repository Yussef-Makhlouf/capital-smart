import React from 'react';
import { useTranslations } from 'next-intl';
const t = useTranslations('hiring');
interface Certificate {
  title: string;
  style?: string;
}

interface CertificatesListProps {
  certificates: Certificate[];
}

const CertificatesList: React.FC<CertificatesListProps> = ({ certificates }) => {
  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
        {/* This key should be added to translations if you want a localized heading */}
        الشهادات المعتمدة / Accredited Certificates
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full max-w-3xl">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-lg border border-gray-100 bg-gradient-to-br from-[#F8FAFC] to-white p-6 flex items-center gap-4 transition-transform hover:scale-105 ${cert.style || ''}`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg shrink-0">
              {idx + 1}
            </span>
            <span className="text-base md:text-lg font-medium text-gray-700 text-right md:text-left">
              {cert.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesList;
