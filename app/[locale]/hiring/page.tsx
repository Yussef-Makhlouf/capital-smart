"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';


export default function HiringPage() {
  const t = useTranslations('hiring');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full h-full pb-16">
        <Header />
      </div>

      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 z-10" />
        <Image
          src="/article2.jpg"
          alt={t('pageTitle')}
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] h-[14px]">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">{t('breadcrumbs.hiring')}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/">
              <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">{t('breadcrumbs.home')}</span>
            </Link>
          </div>
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center">{t('pageTitle')}</h1>
        </div>
      </section>
      {/* Career and Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-12 max-w-[967px] mx-auto">

            {/* Career Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full bg-gradient-to-br from-[#EBF2F9] to-white rounded-[40px] p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-primary text-[28px] font-bold">{t('career.title')}</h2>
              </div>
              <p className="text-[#475467] text-lg leading-8 mb-6">
                {t('career.description')}
                <a href="mailto:careers@CapitalSmartFBP.com" className="text-primary font-bold hover:underline"> careers@CapitalSmartFBP.com</a>
              </p>
            </motion.div>

            {/* Training Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full bg-gradient-to-br from-[#EBF2F9] to-white rounded-[40px] p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L15 12M12 15L9 12M12 15V9M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-primary text-[28px] font-bold">{t('training.title')}</h2>
              </div>
              <p className="text-[#475467] text-lg leading-8 mb-6">
                {t('training.description')}
                <a href="mailto:careers@CapitalSmartFBP.com" className="text-primary font-bold hover:underline"> careers@CapitalSmartFBP.com</a>
              </p>
              {/* Certificates Section */}
              {/* Certificates Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Certificate 1 */}
                <div className="bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col gap-2">
                  <span className="font-bold text-primary">{t('certificates.cma.title')}</span>
                  <span className="text-gray-700">{t('certificates.cma.subtitle')}</span>
                  <span className="text-sm text-gray-500">{t('certificates.cma.issuer')}</span>
                </div>
                {/* Certificate 2 */}
                <div className="bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col gap-2">
                  <span className="font-bold text-primary">{t('certificates.ifrs.title')}</span>
                  <span className="text-gray-700">{t('certificates.ifrs.subtitle')}</span>
                  <span className="text-sm text-gray-500">{t('certificates.ifrs.issuer')}</span>
                </div>
                {/* Certificate 3 */}
                <div className="bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col gap-2">
                  <span className="font-bold text-primary">{t('certificates.fmva.title')}</span>
                  <span className="text-gray-700">{t('certificates.fmva.subtitle')}</span>
                  <span className="text-sm text-gray-500">{t('certificates.fmva.issuer')}</span>
                </div>
                {/* Certificate 4 */}
                <div className="bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col gap-2">
                  <span className="font-bold text-primary">{t('certificates.fmaa.title')}</span>
                  <span className="text-gray-700">{t('certificates.fmaa.subtitle')}</span>
                  <span className="text-sm text-gray-500">{t('certificates.fmaa.issuer')}</span>
                </div>

                <div className="col-span-1 sm:col-span-2 mt-4 flex justify-center">
                  <Link href="/certificates">
                    <button className="bg-[#05509F] hover:bg-[#05509F]/90 text-white font-bold py-3 px-8 rounded-[40px] transition-all">
                      {t('certificatesLogs')}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-[#FAFAFA] to-white">
        <div className="container mx-auto px-4 lg:px-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-12 max-w-[967px] mx-auto">

            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary text-[32px] md:text-[42px] font-extrabold mb-6">
                {t('team.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[#475467] text-lg leading-8 max-w-2xl mx-auto">
                {t('team.description')}
              </motion.p>
            </div>

            {/* Team Member Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-3xl bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="#EC2127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#EC2127" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="text-primary text-[24px] font-bold mb-2">{t('teamMember.name')}</h3>
                <p className="text-[#475467] text-lg mb-6">{t('teamMember.position')}</p>

                <div className="w-full max-w-[600px] bg-[#FAFAFA] rounded-2xl p-6">
                  <h4 className="text-primary text-[20px] font-bold mb-4">{t('teamMember.experienceTitle')}</h4>
                  <ul className="list-disc list-inside text-[#475467] text-lg leading-8">
                    <li>{t('teamMember.experience')}</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      {/* <PartnersSection /> */}
      <ContactSection />

    </div>
  );
}