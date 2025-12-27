"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Link } from "@/lib/navigation"

export default function WhyUs() {
  const t = useTranslations('whyUs');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  console.log('Badge:', t('badge'));
  console.log('Title:', t('title'));
  console.log('Description:', t('description'));
  console.log('Company Name:', t('companyName'));

  return (
    <section className="relative py-24 bg-[#FAFAFA]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[87px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start gap-8 lg:gap-12 w-full lg:w-[813px]">
            <div className="flex flex-row items-center gap-5">
              <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
                <span className="text-[#05509F] text-[14px] font-bold">{t('badge')}</span>
              </div>
            </div>

            <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px]">
              {t('title')}
            </h2>

            <div className="flex flex-col gap-8 lg:gap-12 text-justify text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[40px] text-black">
              <p>
                {t('description')}
              </p>
            </div>

            {/* Company Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-[#05509F] rounded-[40px] px-8 py-4 flex items-center gap-4"
            >
              <div className="w-[45px] h-[45px] bg-white rounded-[15px] flex items-center justify-center">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.485 5.44409L8.90412 14.025L6.19336 11.3142" stroke="#EC2127" strokeWidth="1.5" strokeMiterlimit="10" />
                </svg>
              </div>
              <Link href='/financial' className="text-white text-xl sm:text-2xl font-bold">{t('companyName')}</Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[775px] relative rounded-[30px] sm:rounded-[50px] lg:rounded-[100px] overflow-hidden">
            <Image
              src="/profiles.png"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05509F]/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute left-[-60px] sm:left-[-90px] md:left-[-114px] top-[-40px] sm:top-[-50px] md:top-[-66px] w-[200px] sm:w-[250px] md:w-[328px] h-[200px] sm:h-[250px] md:h-[328px] bg-[#05509F] opacity-5 blur-[30px] sm:blur-[40px] md:blur-[50px] rounded-full"></div>
    </section>
  )
}
