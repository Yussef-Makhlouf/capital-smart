"use client"

import Link from "next/link"
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="pt-8 md:pt-16">
      <div className="container mx-auto px-4 lg:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Logo and Description Section */}
          <div className="lg:col-span-5 order-1 md:order-1">
            <div className="flex flex-col items-center md:items-start">
              <img src="/logo2.png" alt={t('logoAlt')} className="w-[72px] md:w-[92px] h-[72px] md:h-[92px] object-contain mb-4 md:mb-6 rounded-full" />
              <p className="text-[#656565] text-sm md:text-base leading-[24px] md:leading-[32px]   mb-6 md:mb-8 max-w-[467px]" >
                {t('description')}
              </p>
              <a href="/catalog.pdf" download className="bg-[#E41937] text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#E41937]/90 transition-colors">
                <img src="/vector.png" alt="arrow" className="w-3 h-3" />
                {t('companyProfile')}
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 order-2 md:order-2">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#05509F] text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('quickLinks')}</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-6 md:mb-8"></div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-5">
                <Link href="/" className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('home')}</Link>
                <Link href="/about" className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('about')}</Link>
                <Link href="/services" className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('services')}</Link>
                <Link href="/library" className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('library')}</Link>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="lg:col-span-2 order-3 md:order-3">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#05509F] text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('help')}</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-6 md:mb-8"></div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-5">
                <Link href="/hiring" className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('jobsTraining')}</Link>
                <Link href="/financial" className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('bookConsultation')}</Link>
                <a href="/catalog.pdf" download className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('companyProfile')}</a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2 order-4 md:order-4">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#05509F] text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('contactUs')}</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-6 md:mb-8"></div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-5">
                <span className="text-[#656565] text-sm md:text-base">info@3Capital_Financial .com</span>
                <span className="text-[#656565] text-sm md:text-base">20 1029700534+</span>
                <span className="text-[#656565] text-sm md:text-base">01029700534 02+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start mt-12 md:mt-16">
          <h3 className="text-[#05509F] text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('followUs')}</h3>
          <div className="flex gap-3">
            <Link href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/facebook.png" alt="Facebook" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/tiktok.png" alt="TikTok" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/instagram.png" alt="Instagram" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/xplat.png" alt="X" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#05509F] mt-12 md:mt-16">
        <div className="container mx-auto px-4 lg:px-[100px] py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-xs order-2 md:order-1 text-center md:text-left">
              {t('developedBy')} <Link href="https://fashne.net" className="text-white hover:text-gray-300 transition-colors">Fashne Digital Markiting</Link>
            </p>
            <p className="text-white text-xs font-bold order-1 md:order-2 text-center md:text-right">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
