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
  const [activeCategory, setActiveCategory] = useState("all");

  const services: Service[] = [
    {
      id: 1,
      title: "الاستشارات المالية المتقدمة",
      description: "حلول استشارية متكاملة تساعد الشركات في تحقيق النمو المستدام وتحسين الأداء المالي من خلال استراتيجيات مبتكرة.",
      category: "استشارات متقدمة",
      image: "/service1.png",
      link: "/services/advanced-consulting",
      features: [
        "تحليل مالي متقدم",
        "تخطيط استراتيجي طويل الأمد",
        "تحسين الهيكل المالي",
        "إدارة الأصول والاستثمارات"
      ]
    },
    {
      id: 2,
      title: "إدارة الثروات والاستثمار",
      description: "خدمات متخصصة في إدارة الثروات وتنويع المحافظ الاستثمارية لتحقيق أقصى عائد مع إدارة المخاطر.",
      category: "إدارة الثروات",
      image: "/service2.png",
      link: "/services/wealth-management",
      features: [
        "تخطيط استثماري شخصي",
        "إدارة المحافظ الاستثمارية",
        "تحليل الأسواق العالمية",
        "تقييم المخاطر والعوائد"
      ]
    },
    {
      id: 3,
      title: "الخدمات المصرفية الاستثمارية",
      description: "حلول مصرفية استثمارية متكاملة للشركات والأفراد، تشمل التمويل والاستثمار وإدارة السيولة.",
      category: "خدمات مصرفية",
      image: "/service3.png",
      link: "/services/investment-banking",
      features: [
        "خدمات التمويل المتقدم",
        "إدارة السيولة والتدفقات النقدية",
        "خدمات الاكتتاب والاكتتاب العام",
        "إدارة الديون والتمويل"
      ]
    },
    {
      id: 4,
      title: "التحليل المالي والاستثماري المتقدم",
      description: "تحليلات مالية متعمقة وتقارير استثمارية شاملة تساعد في اتخاذ قرارات استثمارية مستنيرة.",
      category: "تحليل متقدم",
      image: "/service4.png",
      link: "/services/advanced-analysis",
      features: [
        "تحليل الأسواق المالية",
        "تقييم الاستثمارات والفرص",
        "تحليل المخاطر المالية",
        "توصيات استثمارية مخصصة"
      ]
    },
    {
      id: 5,
      title: "التخطيط المالي الاستراتيجي",
      description: "خدمات تخطيط مالي استراتيجي تساعد الشركات والأفراد في تحقيق أهدافهم المالية طويلة الأمد.",
      category: "تخطيط استراتيجي",
      image: "/service5.png",
      link: "/services/strategic-planning",
      features: [
        "تخطيط مالي شمولي",
        "إدارة المخاطر المالية",
        "تخطيط الضرائب والاستثمار",
        "تقييم الأداء المالي"
      ]
    },
    {
      id: 6,
      title: "خدمات التقارير المالية",
      description: "إعداد وتحليل التقارير المالية المتخصصة وفقاً للمعايير المحلية والدولية.",
      category: "تقارير مالية",
      image: "/service6.png",
      link: "/services/financial-reporting",
      features: [
        "إعداد القوائم المالية",
        "تحليل النسب المالية",
        "تقييم الأداء المالي",
        "تقارير مخصصة للشركات"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "الكل" },
    { id: "استشارات متقدمة", label: "استشارات متقدمة" },
    { id: "إدارة الثروات", label: "إدارة الثروات" },
    { id: "خدمات مصرفية", label: "خدمات مصرفية" },
    { id: "تحليل متقدم", label: "تحليل متقدم" },
    { id: "تخطيط استراتيجي", label: "تخطيط استراتيجي" },
    { id: "تقارير مالية", label: "تقارير مالية" }
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
          alt="المكتبة الرقمية"
          fill
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8 z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] h-[14px]">
            <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">المكتبة الرقمية</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">         
              <span className="text-white text-[12px] sm:text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.2] text-center">المكتبة الرقمية</h1>
        </div>
      </section>

      {/* library Section */}
      <section className="relative py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-5">
              <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
                <span className="text-[#05509F] text-[14px] font-bold">المكتبة</span>
              </div>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px] text-center">
              المكتبة الرقمية
            </h2>

            <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
              نقدم مجموعة شاملة من المكتبة الرقمية المصممة خصيصاً لتلبية احتياجات عملائنا وتحقيق أهدافهم المالية في بيئة الأعمال المتغيرة.
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
                      معرفة المزيد
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
              عرض المزيد من الخدمات
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
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}