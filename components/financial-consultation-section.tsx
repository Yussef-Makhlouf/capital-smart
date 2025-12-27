"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

type TabItem = {
  id: number;
  title: string;
  image: string;
  description: string;
};

type Tab = {
  id: string;
  label: string;
};

type TabContent = {
  [key: string]: TabItem[];
};

export default function FinancialConsultationSection({ showButton = true }: { showButton?: boolean }) {
  const t = useTranslations('financial')
  const [activeTab, setActiveTab] = useState("services")

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

  const tabs: Tab[] = [
    { id: "services", label: t('tabs.services') },
    { id: "steps", label: t('tabs.steps') },
    { id: "benefits", label: t('tabs.benefits') },
    { id: "tools", label: t('tabs.tools') },
    { id: "reports", label: t('tabs.reports') },
  ]

  const tabContent: TabContent = {
    services: [
      { id: 1, title: t('content.services.0.title'), image: "/ill7.png", description: t('content.services.0.description') },
      { id: 2, title: t('content.services.1.title'), image: "/ill6.png", description: t('content.services.1.description') },
      { id: 3, title: t('content.services.2.title'), image: "/ill2.png", description: t('content.services.2.description') },
      { id: 4, title: t('content.services.3.title'), image: "/ill16.png", description: t('content.services.3.description') },
      { id: 5, title: t('content.services.4.title'), image: "/ill.png", description: t('content.services.4.description') },
      { id: 6, title: t('content.services.5.title'), image: "/ill8.png", description: t('content.services.5.description') },
      { id: 7, title: t('content.services.6.title'), image: "/ill3.png", description: t('content.services.6.description') },
      { id: 8, title: t('content.services.7.title'), image: "/ill15.png", description: t('content.services.7.description') },
    ],
    steps: [
      { id: 1, title: t('content.steps.0.title'), image: "/ill.png", description: t('content.steps.0.description') },
      { id: 2, title: t('content.steps.1.title'), image: "/ill.png", description: t('content.steps.1.description') },
      { id: 3, title: t('content.steps.2.title'), image: "/ill.png", description: t('content.steps.2.description') },
      { id: 4, title: t('content.steps.3.title'), image: "/ill.png", description: t('content.steps.3.description') },
      { id: 5, title: t('content.steps.4.title'), image: "/ill.png", description: t('content.steps.4.description') },
      { id: 6, title: t('content.steps.5.title'), image: "/ill.png", description: t('content.steps.5.description') },
    ],
    benefits: [
      { id: 1, title: t('content.benefits.0.title'), image: "/ill.png", description: t('content.benefits.0.description') },
      { id: 2, title: t('content.benefits.1.title'), image: "/ill.png", description: t('content.benefits.1.description') },
      { id: 3, title: t('content.benefits.2.title'), image: "/ill.png", description: t('content.benefits.2.description') },
      { id: 4, title: t('content.benefits.3.title'), image: "/ill.png", description: t('content.benefits.3.description') },
      { id: 5, title: t('content.benefits.4.title'), image: "/ill.png", description: t('content.benefits.4.description') },
    ],
    tools: [
      { id: 1, title: t('content.tools.0.title'), image: "/ill.png", description: t('content.tools.0.description') },
      { id: 2, title: t('content.tools.1.title'), image: "/ill.png", description: t('content.tools.1.description') },
      { id: 3, title: t('content.tools.2.title'), image: "/ill.png", description: t('content.tools.2.description') },
      { id: 4, title: t('content.tools.3.title'), image: "/ill.png", description: t('content.tools.3.description') },
      { id: 5, title: t('content.tools.4.title'), image: "/ill.png", description: t('content.tools.4.description') },
    ],
    reports: [
      { id: 1, title: t('content.reports.0.title'), image: "/ill.png", description: t('content.reports.0.description') },
      { id: 2, title: t('content.reports.1.title'), image: "/ill.png", description: t('content.reports.1.description') },
      { id: 3, title: t('content.reports.2.title'), image: "/ill.png", description: t('content.reports.2.description') },
      { id: 4, title: t('content.reports.3.title'), image: "/ill.png", description: t('content.reports.3.description') },
      { id: 5, title: t('content.reports.4.title'), image: "/ill.png", description: t('content.reports.4.description') },
    ]
  }

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-12 max-w-[967px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="bg-[#EBF2F9] rounded-[40px] py-[10px] px-6">
              <span className="text-primary font-bold text-base">{t('badge')}</span>
            </div>
          </div>

          <h2 className="text-primary text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.2] text-center">
            {t('title')}
          </h2>

          <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            {t('description')}
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-[40px] py-[10px] px-6 h-[58px] transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-[#EBF2F9] text-[#475467]"
                }`}
              >
                <span className="font-bold text-sm whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 w-full px-2 sm:px-4 max-w-[1600px] mx-auto"
        >
          {tabContent[activeTab].map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="sm:rounded-[32px] lg:rounded-[40px] p-3 sm:p-4 lg:p-6 w-full flex flex-col transition-all hover:border-2 hover:border-primary"
            >
              <div className="w-full aspect-square rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden bg-[#ffff] mb-4 sm:mb-6 lg:mb-8">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2 sm:p-3 lg:p-4"
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
              <div className="w-full pt-2 sm:pt-3 lg:pt-4 border-t border-gray-100">
                <div className="flex flex-row-reverse items-center gap-2 sm:gap-3 justify-end">
                  <h3 className="text-primary text-sm sm:text-base lg:text-lg font-bold leading-tight sm:leading-relaxed  line-clamp-2">
                    {item.title}
                  </h3>
                  <svg 
                    width="8" 
                    height="8" 
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-[-90deg] flex-shrink-0 sm:w-3 sm:h-3 lg:w-4 lg:h-4"
                  >
                    <path d="M6 0L11.1962 9L0.803847 9L6 0Z" fill="#EC2127"/>
                  </svg>
                </div>
                <p className="text-[#475467] text-sm mt-2 ">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showButton && (
          <div className="flex justify-center mt-16">
            <Button className="bg-secondary hover:bg-secondary/90 rounded-[40px] h-[58px] px-8 text-white font-bold text-base gap-2">
            {t('bookNow')}
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}