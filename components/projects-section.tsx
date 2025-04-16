"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import type { JSX } from 'react'

export default function ProjectsSection({ showButton = true }: { showButton?: boolean }) {
  const [showAllServices, setShowAllServices] = useState(false)

  const allServices = [
    {
      image: "/pro1.png",
      alt: "الحسابات والمالية",
      title: "الحسابات والمالية",
      description: "إدارة الحسابات، تسجيل المعاملات، إعداد التقارير المالية، وإدارة الرواتب والتأمينات الاجتماعية"
    },
    {
      image: "/pro2.png",
      alt: "الإشراف المالي",
      title: "الإشراف المالي",
      description: "تخطيط الميزانية، تحليل التدفقات النقدية، ومراقبة الالتزام المالي وتقييم الضوابط الداخلية"
    },
    {
      image: "/pro3.png",
      alt: "مدير مالي افتراضي",
      title: "مدير مالي افتراضي",
      description: "تقديم خبرة مالية متكاملة وتقارير شاملة لتطوير استراتيجيات المالية والتشغيل وإدارة المخاطر"
    },
    {
      image: "/pro4.png",
      alt: "العناية الواجبة",
      title: "العناية الواجبة",
      description: "تحليل مالي شامل، مراجعة قانونية، تقييم السوق والعمليات، وتقييم المخاطر والإدارة"
    },
    {
      image: "/pro5.png",
      alt: "خدمات الزكاة والضرائب",
      title: "خدمات الزكاة والضرائب",
      description: "توفير استشارات متخصصة في التوافق مع الزكاة والتخطيط الضريبي الأمثل"
    },
    {
      image: "/pro6.png",
      alt: "الاستشارات الإدارية",
      title: "الاستشارات الإدارية",
      description: "تقديم حلول استشارية متكاملة لتحسين الأداء الإداري وتطوير العمليات"
    },
    {
      image: "/pro1.png",
      alt: "الاندماجات والاستحواذات",
      title: "الاندماجات والاستحواذات",
      description: "توفير استشارات متخصصة في عمليات الاندماج والاستحواذ وتقييم الفرص الاستثمارية"
    },
    {
      image: "/pro2.png",
      alt: "الاستشارات المالية",
      title: "الاستشارات المالية",
      description: "تقديم استشارات مالية متخصصة لتحسين الأداء المالي واتخاذ القرارات الاستثمارية"
    },
    {
      image: "/pro3.png",
      alt: "استشارات الشركات العائلية",
      title: "استشارات الشركات العائلية",
      description: "توفير حلول مخصصة للشركات العائلية لضمان استدامة النمو والنجاح"
    },
    {
      image: "/pro4.png",
      alt: "أنظمة ERP",
      title: "أنظمة ERP",
      description: "تنفيذ وتطوير أنظمة تخطيط موارد المؤسسات لتحسين العمليات وزيادة الكفاءة"
    },
    {
      image: "/pro5.png",
      alt: "دراسات الجدوى",
      title: "دراسات الجدوى",
      description: "إعداد دراسات جدوى شاملة لتقييم المشاريع الاستثمارية واتخاذ القرارات المثلى"
    },
    {
      image: "/pro6.png",
      alt: "تسهيل القروض",
      title: "تسهيل القروض",
      description: "تسهيل الحصول على القروض التجارية وتخصيص الأراضي للمشاريع الصناعية"
    },
    {
      image: "/pro1.png",
      alt: "التقييمات المالية",
      title: "التقييمات المالية",
      description: "إجراء تقييمات مالية شاملة للشركات والأصول والمشاريع الاستثمارية"
    },
    {
      image: "/pro2.png",
      alt: "النمذجة المالية",
      title: "النمذجة المالية",
      description: "تطوير نماذج مالية متقدمة للتنبؤ وتحليل السيناريوهات المالية المختلفة"
    },
    {
      image: "/pro3.png",
      alt: "الرقابة الداخلية",
      title: "الرقابة الداخلية",
      description: "تطوير وتنفيذ أنظمة رقابة داخلية فعالة لضمان الامتثال والشفافية"
    },
    {
      image: "/pro4.png",
      alt: "التخطيط والميزانية",
      title: "التخطيط والميزانية",
      description: "تطوير خطط مالية شاملة وإعداد موازنات واقعية لتحقيق الأهداف الاستراتيجية"
    },
    {
      image: "/pro5.png",
      alt: "التحكم والامتثال",
      title: "التحكم والامتثال",
      description: "ضمان الامتثال للقوانين واللوائح وتطبيق أفضل ممارسات الحوكمة"
    },
    {
      image: "/pro6.png",
      alt: "التحول الرقمي",
      title: "التحول الرقمي",
      description: "تطوير وتنفيذ استراتيجيات التحول الرقمي لتحسين العمليات وزيادة الكفاءة"
    }
  ]

  const displayedServices = showAllServices ? allServices : allServices.slice(0, 6)

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-[100px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-12 max-w-[876px] mx-auto mb-20">
          <div className="w-full flex justify-center">
            <div className="bg-[#05509F]/10 rounded-[40px] py-[10px] px-6 transform hover:scale-105 transition-transform duration-300">
              <span className="text-[#05509F] font-bold text-xs sm:text-sm">خدماتنا</span>
            </div>
          </div>

          <h2 className="text-[#05509F] text-3xl sm:text-[42px] md:text-[52px] font-extrabold leading-[1.2] md:leading-[64px] text-center w-full">
            نطاق الخدمات المالية والاستشارية
          </h2>

          <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-7 sm:leading-8 md:leading-10 text-center max-w-[700px]">
            نقدم مجموعة شاملة من الخدمات المالية والاستشارية المصممة لمساعدة الشركات والأفراد على تحقيق أهدافهم المالية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {displayedServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-full aspect-square rounded-[80px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/35 transition-opacity group-hover:bg-black/50"></div>
                <img src={service.image} alt={service.alt} className="w-full h-full object-cover rounded-[80px]" />
              
                <div className="absolute top-6 right-6 py-2 px-4">
                  <div className="bg-white rounded-[12px] py-1 px-3 flex flex-col items-center gap-1 shadow-md transform transition-transform duration-300 hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB81F">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <span className="text-[#05509F] font-extrabold text-xs sm:text-sm">4.9</span>
                  </div>
                </div>
                <Link href="/services">
                  <img src="/arow1.png" alt="arrow-right" className="w-12 h-12 absolute bottom-6 left-6" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-4 w-full mt-6" dir="rtl">
                <p className="text-2xl md:text-[32px] font-bold text-start text-[#05509F]">{service.title}</p>
                <p className="text-[#656565] text-sm sm:text-base md:text-xl font-medium leading-7 sm:leading-8 md:leading-10 text-right">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center mt-20">
            <Button 
              onClick={() => setShowAllServices(!showAllServices)}
              className="bg-[#E41937] hover:bg-[#E41937]/90 rounded-[40px] h-[70px] px-12 text-white font-bold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {showAllServices ? "عرض أقل" : "رؤيــة المزيــــد"}
              <img src="/vector.png" alt="arrow-right" className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
