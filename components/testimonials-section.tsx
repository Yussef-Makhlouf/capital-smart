"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "أحمد السديري",
    type: "فندق",
    rating: 5.0,
    content: "قدمت لنا الاستشارات المالية رؤية واضحة لمستقبل أعمالنا. كانت النصائح استراتيجية وساعدتنا في تحقيق نمو كبير في الإيرادات.",
    date: "14 مارس 2025",
    location: "جدة – المملكة العربية السعودية",
    flag: "🇸🇦"
  },
  {
    name: "سارة القحطاني",
    type: "مؤسسة",
    rating: 5.0,
    content: "الاستشارات المالية التي تلقيناها كانت محترفة للغاية. ساعدتنا في تحسين إدارة التدفق النقدي وزيادة كفاءة العمليات المالية.",
    date: "14 مارس 2025",
    location: "دبي – الإمارات العربية المتحدة",
    flag: "🇦🇪"
  },
  {
    name: "محمد العتيبي",
    type: "شركــة",
    rating: 5.0,
    content: "بفضل الاستشارات المالية المتخصصة، استطعنا تحسين هيكل التكاليف وزيادة هوامش الربح بشكل ملحوظ. خدمة ممتازة وتوصيات قيمة.",
    date: "14 مارس 2025",
    location: "القاهرة – جمهورية مصر العربية",
    flag: "🇪🇬"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 container mx-auto px-4 md:px-8 lg:px-[100px]" id="testimonials" dir="rtl">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 lg:gap-12 max-w-[582px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#EBF5FF] rounded-[40px] py-[10px] px-6 flex items-center"
        >
          <span className="text-[#003B95] font-bold text-sm">التقييمات</span>
        </motion.div>

        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#003B95] text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight lg:leading-[64px] text-center"
        >
          مــاذا يقــول عملاؤنا عنا !.
        </motion.h4>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-black text-base lg:text-lg font-medium leading-relaxed lg:leading-10 text-center"
        >
          كن عميلا الان
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#F9F9F9] rounded-[40px] p-6 lg:p-10 flex flex-col items-start gap-6 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#003B95]/5 rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#E31E24]/5 rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
            
            <div className="flex justify-between items-center w-full relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] bg-[#003B95] rounded-[18px] flex items-center justify-center shadow-lg">
                  <span className="text-white font-extrabold text-xs">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-extrabold text-sm">{testimonial.name}</h3>
                  <p className="text-sm text-[#4A4A4A]">{testimonial.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-semibold text-base">{testimonial.rating}</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFBE33">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
            </div>

            <p className="text-sm leading-[30px] text-right text-[#4A4A4A] min-h-[90px] relative z-10">
              {testimonial.content}
            </p>

            <div className="flex justify-between items-center w-full relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{testimonial.flag}</span>
                <span className="text-[#003B95] text-sm lg:text-base font-extrabold">{testimonial.location}</span>
              </div>
              <span className="text-[#747474] text-xs font-medium">{testimonial.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center mt-12 lg:mt-16"
      >
        <Link href="/financial">
          <Button 
            className="bg-[#E31E24] hover:bg-[#E31E24]/90 rounded-[40px] h-[60px] lg:h-[70px] px-8 text-white font-bold text-base transition-colors group"
          >
            كن عميلا
            <img src="/vector.png" alt="arrow-right" className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
} 