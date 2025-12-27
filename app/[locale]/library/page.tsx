"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import LibrarySection from "@/components/library-section";

type Service = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  features: string[];
};

export default function FinancialServicesPage() {
  const t = useTranslations('library');
  const [activeCategory, setActiveCategory] = useState("all");

  const services: Service[] = [
    {
      id: 1,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      category: t('categories.advanced'),
      image: "/cover.png",
      link: "/services/advanced-consulting",
      features: [
        t('services.service1.features.feature1'),
        t('services.service1.features.feature2'),
        t('services.service1.features.feature3'),
        t('services.service1.features.feature4')
      ]
    },
    {
      id: 2,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      category: t('categories.wealth'),
      image: "/cover.png",
      link: "/services/wealth-management",
      features: [
        t('services.service2.features.feature1'),
        t('services.service2.features.feature2'),
        t('services.service2.features.feature3'),
        t('services.service2.features.feature4')
      ]
    },
    {
      id: 3,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      category: t('categories.banking'),
      image: "/cover.png",
      link: "/services/investment-banking",
      features: [
        t('services.service3.features.feature1'),
        t('services.service3.features.feature2'),
        t('services.service3.features.feature3'),
        t('services.service3.features.feature4')
      ]
    },
    {
      id: 4,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      category: t('categories.analysis'),
      image: "/cover.png",
      link: "/services/advanced-analysis",
      features: [
        t('services.service4.features.feature1'),
        t('services.service4.features.feature2'),
        t('services.service4.features.feature3'),
        t('services.service4.features.feature4')
      ]
    },
    {
      id: 5,
      title: t('services.service5.title'),
      description: t('services.service5.description'),
      category: t('categories.planning'),
      image: "/cover.png",
      link: "/services/strategic-planning",
      features: [
        t('services.service5.features.feature1'),
        t('services.service5.features.feature2'),
        t('services.service5.features.feature3'),
        t('services.service5.features.feature4')
      ]
    },
    {
      id: 6,
      title: t('services.service6.title'),
      description: t('services.service6.description'),
      category: t('categories.reporting'),
      image: "/cover.png",
      link: "/services/financial-reporting",
      features: [
        t('services.service6.features.feature1'),
        t('services.service6.features.feature2'),
        t('services.service6.features.feature3'),
        t('services.service6.features.feature4')
      ]
    }
  ];

  const categories = [
    { id: "all", label: t('categoryFilters.all') },
    { id: t('categories.advanced'), label: t('categories.advanced') },
    { id: t('categories.wealth'), label: t('categories.wealth') },
    { id: t('categories.banking'), label: t('categories.banking') },
    { id: t('categories.analysis'), label: t('categories.analysis') },
    { id: t('categories.planning'), label: t('categories.planning') },
    { id: t('categories.reporting'), label: t('categories.reporting') }
  ];

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="relative overflow-x-hidden">
      <div className="w-full h-full pb-16">
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
          <div className="flex flex-row-reverse items-center gap-[6px] h-[14px]">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">{t('pageTitle')}</span>
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

      {/* library Section */}
      <LibrarySection showButton={false} />

      {/* Other sections */}
      <TestimonialsSection />
      <FaqSection />
      {/* <PartnersSection /> */}
      <ContactSection />

    </div>
  );
}