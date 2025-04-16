"use client"

import { useState } from "react"

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(0)

  const faqItems = [

    {
      question: "ما هي الخدمات الاستشارية المالية التي تقدمونها؟",
      answer: "نقدم مجموعة شاملة من الخدمات الاستشارية المالية تشمل التخطيط المالي الشخصي، إدارة الاستثمارات، التخطيط الضريبي، والتخطيط للتقاعد."
    },
    {
      question: "كيف يمكنني تحديد احتياجاتي الاستشارية المالية؟",
      answer: "نقوم بإجراء تحليل شامل للوضع المالي الحالي، الأهداف المستقبلية، وتحمل المخاطر لتحديد أفضل الخدمات المناسبة لك."
    },
    {
      question: "ما هي مدة جلسة الاستشارة المالية؟",
      answer: "تتراوح مدة الجلسة الاستشارية بين 60-90 دقيقة، وقد تتطلب جلسات متابعة حسب تعقيد الحالة."
    },
    {
      question: "هل تقدمون استشارات مالية للشركات الصغيرة؟",
      answer: "نعم، نقدم خدمات استشارية متخصصة للشركات الصغيرة تشمل التخطيط المالي، إدارة التدفق النقدي، وتحسين الأداء المالي."
    },
    {
      question: "ما هي تكلفة الخدمات الاستشارية المالية؟",
      answer: "تختلف التكلفة حسب نوع الخدمة ومدى تعقيد الحالة. نقدم خطط أسعار مرنة تناسب مختلف الميزانيات."
    },
    {
      question: "هل تقدمون استشارات مالية عن بعد؟",
      answer: "نعم، نقدم استشارات مالية عبر الإنترنت من خلال جلسات افتراضية آمنة ومريحة للعملاء."
    },
    {
      question: "ما هي مؤهلات المستشارين الماليين لديكم؟",
      answer: "يتمتع مستشارونا بشهادات معتمدة وخبرة واسعة في المجال المالي، مع التزامهم بالمعايير الأخلاقية والمهنية العالية."
    },
    {
      question: "كيف يمكنني البدء في الحصول على استشارة مالية؟",
      answer: "يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني لتحديد موعد أولي مجاني لمناقشة احتياجاتك المالية."
    }
  ]

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="flex flex-col items-center gap-12 max-w-[813px] mx-auto">
          <div className="flex items-center gap-5">
            <div className="bg-primary/10 rounded-[40px] py-[10px] px-4 flex items-center">
              <span className="text-primary font-bold text-xs sm:text-sm">الاسئلة الشــائعة</span>
            </div>
          </div>

          <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight sm:leading-[53px] text-right">
            استفسارات متكررة وإجابات واضحة !.
          </h2>

          <p className="text-black text-base sm:text-lg font-medium leading-8 sm:leading-10">أسئلتكم، وإجاباتنا</p>
        </div>

        <div className="flex flex-col gap-3 mt-16 max-w-[1720px] mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[40px] p-5 cursor-pointer transition-all duration-300 hover:shadow-md"
              onClick={() => setOpenItem(openItem === index ? -1 : index)}
            >
              <div className="flex justify-between items-center">
                <div className={`w-5 h-5 ${openItem === index ? 'bg-primary' : 'bg-black'} rounded-full flex items-center justify-center transition-colors duration-300`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {openItem === index ? (
                      <path d="M19 13H5V11H19V13Z" fill="white" />
                    ) : (
                      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
                    )}
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className={`${openItem === index ? 'text-primary text-xl sm:text-2xl font-extrabold' : 'text-black text-sm sm:text-base font-semibold'} transition-all duration-300`}>
                    {item.question}
                  </h3>
                  {openItem === index && (
                    <p className="text-black text-sm sm:text-base font-semibold animate-fadeIn text-center">
                      {item.answer}
                    </p>
                  )}
                </div>
                <div className={`w-8 h-8 bg-secondary rounded-full flex items-center justify-center transform transition-transform duration-300 ${openItem === index ? 'rotate-180' : 'rotate-90'}`}>
                  <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1L1 1L3.5 3L6 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
