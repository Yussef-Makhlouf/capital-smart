"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import FaqSection from "@/components/faq-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="bg-[#FAFAFA] relative">
         <div className="w-full h-full pb-28">
   <Header />
   </div>
      
      {/* Hero Banner */}
      <section className="relative w-full h-[262px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0  z-10" />
        <Image
          src="/subhero.png"
          alt="تواصل معنا"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[301px] h-[185px] bg-white/20 backdrop-blur-[40px] rounded-[40px] flex flex-col items-center justify-center py-10 px-10 gap-[38px] z-20">
          <div className="flex flex-row-reverse items-center gap-[6px] w-[180px] h-[14px]">
            <span className="text-white text-[14px] font-semibold ">اتصل بنـــا الان </span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.16683 3.5L4.66683 7L8.16683 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Link href="/">
            <span className="text-white text-[14px] font-semibold leading-[14px]">الرئيــسية</span>
            </Link>
          </div>
          <h1 className="text-white text-[42px] font-extrabold leading-[53px]"> تواصل معنا</h1>
        </div>
      </section>

<ContactSection />

      <Footer />
    </div>
  );
}