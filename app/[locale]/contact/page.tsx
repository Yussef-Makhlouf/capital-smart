"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import { Link } from "@/lib/navigation";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-[#FAFAFA] relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full h-full pb-28">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] h-[14px] justify-center">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">{t('breadcrumbs.contact')}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Link href="/">
              <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">{t('breadcrumbs.home')}</span>
            </Link>
          </div>
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center">{t('heroTitle')}</h1>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}