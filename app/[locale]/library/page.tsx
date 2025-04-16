"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

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
    <div className="relative">
      <div className="w-full h-full pb-16">
        <Header />
      </div>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10" />
        <Image
          src="/subhero.png"
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
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">         
              <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">{t('breadcrumbs.home')}</span>
            </Link>
          </div>
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center">{t('pageTitle')}</h1>
        </div>
      </section>

      {/* library Section */}
      <section className="relative py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-5">
              <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
                <span className="text-[#05509F] text-[14px] font-bold">{t('sectionBadge')}</span>
              </div>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px] text-center">
              {t('sectionTitle')}
            </h2>

            <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
              {t('sectionDescription')}
            </p>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-[40px] py-[10px] px-6 h-[58px] transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#05509F] text-white"
                      : "bg-[#EBF2F9] text-[#475467]"
                  }`}
                >
                  <span className="font-bold text-sm whitespace-nowrap">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#05509F] text-white text-sm font-bold px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-[#05509F] text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#475467] text-base mb-4">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-[#475467]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#05509F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="outline"
                    className="w-full bg-[#05509F] text-white hover:bg-[#05509F]/90"
                    asChild
                  >
                    <a href={service.link}>
                      {t('learnMore')}
                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                        <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
       <Link href="/services">
       <Button className="bg-[#EC2127] hover:bg-[#EC2127]/90 rounded-[40px] h-[58px] px-8 text-white font-bold text-base gap-2">
              {t('viewMoreServices')}
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
                    
       </Link>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute left-[-60px] sm:left-[-90px] md:left-[-114px] top-[-40px] sm:top-[-50px] md:top-[-66px] w-[200px] sm:w-[250px] md:w-[328px] h-[200px] sm:h-[250px] md:h-[328px] bg-[#05509F] opacity-5 blur-[30px] sm:blur-[40px] md:blur-[50px] rounded-full"></div>
      </section>

      <TestimonialsSection />
      <FaqSection />
      {/* <PartnersSection /> */}
      <ContactSection />

    </div>
  );
}