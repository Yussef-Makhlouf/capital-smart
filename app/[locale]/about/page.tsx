"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import { Link } from "@/lib/navigation";
import ContactSection from "@/components/contact-section";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('aboutPage');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full h-full pb-12">
        <Header />
      </div>

      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10" />
        <Image
          src="/article2.jpg"
          alt={t('pageTitle')}
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[301px] h-[185px] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-10 px-10 gap-[25px] z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] w-[180px] h-[14px] justify-center">
            <span className="text-white text-[14px] font-semibold">{t('breadcrumbs.about')}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/">
              <span className="text-white text-[14px] font-semibold leading-[14px]">{t('breadcrumbs.home')}</span>
            </Link>
          </div>
          <h1 className="text-white text-[32px] font-extrabold leading-[33px] text-center">{t('heroTitle')}</h1>
        </div>
      </section>

      {/* About Section */}
      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[100px]">
        {/* About Us Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="flex flex-row items-center gap-5">
              <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
                <span className="text-[#05509F] text-[14px] font-bold">{t('aboutUs.badge')}</span>
              </div>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">{t('aboutUs.title')}</h2>

            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>{t('aboutUs.paragraph1')}</p>
              <p>{t('aboutUs.paragraph2')}</p>
            </div>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/profiles.png"
              alt={t('aboutUs.imageAlt')}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/article.jpg"
              alt={t('vision.imageAlt')}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">{t('vision.badge')}</span>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">{t('vision.title')}</h2>

            <p className="text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              {t('vision.description')}
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">{t('mission.badge')}</span>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">{t('mission.title')}</h2>

            <p className="text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              {t('mission.description')}
            </p>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/finance6.jpg"
              alt={t('mission.imageAlt')}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/article3.jpg"
              alt={t('values.imageAlt')}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">{t('values.badge')}</span>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">{t('values.title')}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10" />
                    </svg>
                  </div>
                  <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">{t(`values.items.${index}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">{t('ceo.badge')}</span>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">{t('ceo.name')}</h2>

            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>{t('ceo.paragraph1')}</p>
              <p>{t('ceo.paragraph2')}</p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10" />
                </svg>
              </div>
              <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">{t('ceo.shortName')}</p>
              <p className="text-[#05509F] text-base sm:text-lg lg:text-[20px] font-semibold">{t('ceo.position')}</p>
            </div>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-2.png"
              alt={t('ceo.imageAlt')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <FaqSection />
      {/* <PartnersSection /> */}
      <ContactSection />
    </div>
  );
}