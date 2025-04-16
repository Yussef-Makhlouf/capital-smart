"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import Link from "next/link";
import ContactSection from "@/components/contact-section";

export default function AboutSection() {
  return (
    <div className="relative">
      <div className="w-full h-full pb-12">
        <Header />
      </div>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10" />
        <Image
          src="/subhero.png"
          alt="من نحن"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[301px] h-[185px] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-10 px-10 gap-[38px] z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] w-[180px] h-[14px]">
            <span className="text-white text-[14px] font-semibold">من نحـــن</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">
              <span className="text-white text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[52px] font-extrabold leading-[53px]">من نحـــن</h1>
        </div>
      </section>

      {/* About Section */}
      <div className="relative mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[100px]">
        {/* About Us Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="flex flex-row items-center gap-5">
              <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
                <span className="text-[#05509F] text-[14px] font-bold">نبــذة عن المؤسســـة</span>
              </div>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">من نحـــن ؟</h2>
            
            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>نحن شركة استشارات مالية متخصصة نقدم استشارات مالية احترافية للأعمال المصرية ودول مجلس التعاون الخليجي. تم تصميم خدماتنا من قبل خبراء ماليين، مما يضمن موثوقية خدمات المحاسبة والمالية الخارجية، مما يساعد العملاء في تطوير استراتيجيات أعمال محسنة.</p>
              
              <p>نهجنا الفريد يتجاوز الأعمال التقليدية، حيث نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجات العملاء. من خلال التعاون والابتكار، نهدف إلى دفع النمو والتميز. تشمل وحدات أعمالنا الرئيسية: الاستشارات، القانونية والضرائب، التدقيق والمحاسبة، تنفيذ أنظمة ERP، التحول الرقمي، والاستراتيجية.</p>
            </div>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-1.png"
              alt="Vision"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">الرؤيــة</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">رؤيتنــــــــا</h2>
            
            <p className="text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              رؤيتنا هي أن نصبح شركة استشارات مهنية رائدة في مصر والسعودية والشرق الأوسط، نقدم خدمات مالية وتجارية عالية المستوى متوافقة مع قيمنا ومعايير الجودة الأعلى لتلبية احتياجات عملائنا وضمان النجاح على المدى الطويل للأعمال المحلية والأجنبية.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">الرســـالة</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">رســــالتنا</h2>
            
            <p className="text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              مهمتنا هي مساعدة المنظمات في دفع مهمتها واستراتيجيتها إلى الأمام. نحن نبسط عملياتكم مع تحسين تجربة الخدمة لجميع أصحاب المصلحة وتعزيز استدامة علاقاتنا الاستراتيجية وتقديم خدمات ذات قيمة مضافة لعملائنا.
            </p>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-2.png"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-3.png"
              alt="Values"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">القيم</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">قيمنــــا</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10"/>
                  </svg>
                </div>
                <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">النزاهة والدقة</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10"/>
                  </svg>
                </div>
                <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">الجودة والتحفيز</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10"/>
                  </svg>
                </div>
                <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">الاهتمام والشفافية</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10"/>
                  </svg>
                </div>
                <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">الالتزام والسرية</p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-[87px] py-12 lg:py-[100px]">
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">كلمة الرئيس التنفيذي</span>
            </div>
            
            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">أستاذ / سامح سعيد عبدالفتاح</h2>
            
            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>لقد أسست شركة كابيتال سمارت سمعة موثوقة معروفة بتقديم حلول مخصصة لاحتياجات الأعمال المتنوعة. خدماتنا تستهدف كل من الأعمال المحلية والأجنبية التي ترغب في الاستثمار في السوق المصرية والسعودية، حيث نقدم مزيجًا من الخبرة التجارية، والخبرة الواسعة، والرؤى المحلية، وقدرات الشبكات، والإرشادات الاستراتيجية لضمان نجاح عملائنا في مساعيهم.</p>
              
              <p>نعمل على تسريع تطوير الأعمال في الأسواق الناشئة، وتقليل مخاطر الاستثمار من خلال الاستفادة من الفرص الواعدة التي تتماشى مع مبادرات رؤية 2030.</p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="w-[45px] h-[45px] bg-[#05509F] rounded-[15px] flex items-center justify-center">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
              </div>
              <p className="text-black text-base sm:text-lg lg:text-[20px] font-semibold">سامح سعيد</p>
              <p className="text-[#05509F] text-base sm:text-lg lg:text-[20px] font-semibold">الرئيس التنفيذي</p>
            </div>
          </div>

          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/image-2.png"
              alt="CEO Message"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <FaqSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}