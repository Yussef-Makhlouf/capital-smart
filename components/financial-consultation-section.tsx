"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

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
    { id: "services", label: "خدمات الاستشارات المالية" },
    { id: "steps", label: "خطوات العمل" },
    { id: "benefits", label: "مميزات الاستشارة" },
    { id: "tools", label: "أدوات التحليل" },
    { id: "reports", label: "التقارير المالية" },
  ]

  const tabContent: TabContent = {
    services: [
      { id: 1, title: "تحليل الوضع المالي الحالي", image: "/financial1.png", description: "تقييم شامل للوضع المالي الحالي للشركة أو الفرد، مع تحليل القوائم المالية والمؤشرات الرئيسية" },
      { id: 2, title: "تخطيط الاستثمارات", image: "/financial2.png", description: "وضع استراتيجيات استثمارية متكاملة مع تحليل المخاطر والعوائد المتوقعة" },
      { id: 3, title: "إدارة المخاطر المالية", image: "/financial3.png", description: "تحديد وتقييم وإدارة المخاطر المالية المختلفة مع وضع خطط للحد منها" },
      { id: 4, title: "تحسين التدفق النقدي", image: "/financial4.png", description: "تحليل وتطوير استراتيجيات لتحسين التدفق النقدي وإدارة رأس المال العامل" },
      { id: 5, title: "تخطيط التقاعد", image: "/financial5.png", description: "وضع خطط تقاعد شاملة مع مراعاة الأهداف المالية المستقبلية" },
      { id: 6, title: "إدارة الديون", image: "/financial6.png", description: "تحليل هيكل الديون ووضع استراتيجيات لإدارتها وتخفيض تكلفتها" },
      { id: 7, title: "تخطيط الضرائب", image: "/financial7.png", description: "وضع استراتيجيات ضريبية فعالة مع مراعاة القوانين واللوائح" },
      { id: 8, title: "تقييم المشاريع", image: "/financial8.png", description: "تحليل وتقييم المشاريع الاستثمارية مع حساب معدلات العائد والمخاطر" },
    ],
    steps: [
      { id: 1, title: "التقييم الأولي", image: "/step1.png", description: "تحليل الاحتياجات المالية وتحديد الأهداف والقيود" },
      { id: 2, title: "تحليل البيانات", image: "/step2.png", description: "جمع وتحليل البيانات المالية والاقتصادية ذات الصلة" },
      { id: 3, title: "تحديد الأهداف", image: "/step3.png", description: "وضع أهداف مالية واضحة وقابلة للقياس والتحقيق" },
      { id: 4, title: "وضع الخطة", image: "/step4.png", description: "تطوير خطة مالية شاملة مع تحديد الإجراءات والموارد المطلوبة" },
      { id: 5, title: "تنفيذ الاستراتيجية", image: "/step5.png", description: "تنفيذ الخطة المالية مع متابعة التقدم وإجراء التعديلات اللازمة" },
      { id: 6, title: "المتابعة والتقييم", image: "/step6.png", description: "مراجعة وتقييم النتائج وإجراء التحسينات المستمرة" },
    ],
    benefits: [
      { id: 1, title: "تحسين القرارات المالية", image: "/benefit1.png", description: "اتخاذ قرارات مالية مستنيرة بناءً على تحليل دقيق وشامل" },
      { id: 2, title: "تقليل المخاطر", image: "/benefit2.png", description: "تحديد وإدارة المخاطر المالية بشكل فعال" },
      { id: 3, title: "زيادة العوائد", image: "/benefit3.png", description: "تحسين العوائد المالية من خلال استراتيجيات استثمارية فعالة" },
      { id: 4, title: "توفير الوقت والجهد", image: "/benefit4.png", description: "الاستفادة من خبرة المستشارين الماليين لتوفير الوقت والجهد" },
      { id: 5, title: "تحقيق الأهداف المالية", image: "/benefit5.png", description: "وضع وتنفيذ خطط لتحقيق الأهداف المالية قصيرة وطويلة المدى" },
    ],
    tools: [
      { id: 1, title: "تحليل النسب المالية", image: "/tool1.png", description: "استخدام النسب المالية لتحليل الأداء والوضع المالي" },
      { id: 2, title: "نموذج التدفق النقدي", image: "/tool2.png", description: "تحليل وتوقع التدفقات النقدية المستقبلية" },
      { id: 3, title: "تحليل السيناريوهات", image: "/tool3.png", description: "تقييم النتائج المالية تحت سيناريوهات مختلفة" },
      { id: 4, title: "تقييم المخاطر", image: "/tool4.png", description: "تحليل وتقييم المخاطر المالية المختلفة" },
      { id: 5, title: "تحليل العائد على الاستثمار", image: "/tool5.png", description: "تقييم جدوى المشاريع الاستثمارية" },
    ],
    reports: [
      { id: 1, title: "تقرير الأداء المالي", image: "/report1.png", description: "تحليل شامل للأداء المالي مع مقارنات معيارية" },
      { id: 2, title: "تقرير التدفق النقدي", image: "/report2.png", description: "تحليل التدفقات النقدية وتوقعاتها المستقبلية" },
      { id: 3, title: "تقرير المخاطر", image: "/report3.png", description: "تقييم المخاطر المالية واستراتيجيات إدارتها" },
      { id: 4, title: "تقرير الاستثمارات", image: "/report4.png", description: "تحليل أداء المحفظة الاستثمارية وتوصيات التعديل" },
      { id: 5, title: "تقرير التوصيات", image: "/report5.png", description: "توصيات مالية شاملة مع خطط تنفيذية" },
    ]
  }

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-12 max-w-[967px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="bg-[#EBF2F9] rounded-[40px] py-[10px] px-6">
              <span className="text-primary font-bold text-base">استشارات مالية</span>
            </div>
          </div>

          <h2 className="text-primary text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-[1.2] text-center">
            حلول مالية متكاملة لتحقيق أهدافك
          </h2>

          <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            نقدم خدمات استشارية مالية متخصصة تساعدك في اتخاذ القرارات المالية الصحيحة وتحقيق أهدافك المالية المستقبلية.
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
                  <h3 className="text-primary text-sm sm:text-base lg:text-lg font-bold leading-tight sm:leading-relaxed text-right line-clamp-2">
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
                <p className="text-[#475467] text-sm mt-2 text-right">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {showButton && (
          <div className="flex justify-center mt-16">
            <Button className="bg-secondary hover:bg-secondary/90 rounded-[40px] h-[58px] px-8 text-white font-bold text-base gap-2">
            احجز استشارتك الآن
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