"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type Article = {
  id: number
  title: string
  description: string
  category: string
  date: string
  image: string
  link: string
}

export default function LibrarySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const articles: Article[] = [
    {
      id: 1,
      title: "أهمية الاستشارات المالية في اتخاذ القرارات الاستثمارية",
      description: "كيف يمكن للاستشارات المالية أن تساعد في اتخاذ قرارات استثمارية مستنيرة وتحقيق النجاح المالي.",
      category: "استثمار",
      date: "15 مارس 2024",
      image: "/article1.png",
      link: "/articles/investment-decisions"
    },
    {
      id: 2,
      title: "دور المدير المالي الافتراضي في تطوير الأعمال",
      description: "استكشف كيف يمكن للمدير المالي الافتراضي أن يساهم في نمو وتطوير الأعمال التجارية.",
      category: "إدارة",
      date: "10 مارس 2024",
      image: "/article2.png",
      link: "/articles/virtual-cfo"
    },
    {
      id: 3,
      title: "أساسيات التخطيط المالي للشركات الناشئة",
      description: "دليل شامل للتخطيط المالي الفعال للشركات الناشئة ورواد الأعمال.",
      category: "تخطيط",
      date: "5 مارس 2024",
      image: "/article3.png",
      link: "/articles/financial-planning"
    },
    {
      id: 4,
      title: "التحول الرقمي في القطاع المالي",
      description: "كيف يغير التحول الرقمي مستقبل الخدمات المالية والاستشارية.",
      category: "رقمنة",
      date: "1 مارس 2024",
      image: "/article4.png",
      link: "/articles/digital-transformation"
    },
    {
      id: 5,
      title: "إدارة المخاطر المالية في ظل التحديات الاقتصادية",
      description: "استراتيجيات فعالة لإدارة المخاطر المالية في البيئات الاقتصادية المتغيرة.",
      category: "مخاطر",
      date: "25 فبراير 2024",
      image: "/article5.png",
      link: "/articles/risk-management"
    },
    {
      id: 6,
      title: "أهمية العناية الواجبة في عمليات الدمج والاستحواذ",
      description: "دور العناية الواجبة في ضمان نجاح عمليات الدمج والاستحواذ.",
      category: "دمج",
      date: "20 فبراير 2024",
      image: "/article6.png",
      link: "/articles/mergers-acquisitions"
    }
  ]

  const categories = [
    { id: "all", label: "الكل" },
    { id: "استثمار", label: "استثمار" },
    { id: "إدارة", label: "إدارة" },
    { id: "تخطيط", label: "تخطيط" },
    { id: "رقمنة", label: "رقمنة" },
    { id: "مخاطر", label: "مخاطر" },
    { id: "دمج", label: "دمج" }
  ]

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  return (
    <section className="relative py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-5">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">المكتبة والمقالات</span>
            </div>
          </div>

          <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px] text-center">
            أحدث المقالات والموارد المالية
          </h2>

          <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            اكتشف مجموعة من المقالات والموارد المالية التي تساعدك في اتخاذ قرارات مالية مستنيرة وتطوير أعمالك.
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
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[200px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#05509F] text-white text-sm font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#475467] text-sm mb-4">
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-[#05509F] text-xl font-bold mb-3">
                  {article.title}
                </h3>
                
                <p className="text-[#475467] text-base mb-6">
                  {article.description}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full bg-[#05509F] text-white hover:bg-[#05509F]/90"
                  asChild
                >
                  <a href={article.link}>
                    اقرأ المزيد
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
          <Button className="bg-[#EC2127] hover:bg-[#EC2127]/90 rounded-[40px] h-[58px] px-8 text-white font-bold text-base gap-2">
            عرض المزيد من المقالات
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute left-[-60px] sm:left-[-90px] md:left-[-114px] top-[-40px] sm:top-[-50px] md:top-[-66px] w-[200px] sm:w-[250px] md:w-[328px] h-[200px] sm:h-[250px] md:h-[328px] bg-[#05509F] opacity-5 blur-[30px] sm:blur-[40px] md:blur-[50px] rounded-full"></div>
    </section>
  )
} 