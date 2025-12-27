"use client"

import { Link } from "@/lib/navigation"
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
              <a href="/profile.pdf" download className="bg-[#E41937] text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#E41937]/90 transition-colors">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
                <a href="/profile.pdf" download className="text-[#656565] hover:text-[#05509F] transition-colors text-sm md:text-base">{t('companyProfile')}</a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2 order-4 md:order-4">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[#05509F] text-xl md:text-2xl font-bold mb-3 md:mb-4">{t('contactUs')}</h3>
              <div className="w-12 h-0.5 bg-[#05509F] mb-6 md:mb-8"></div>
              <div className="flex flex-col items-center md:items-start gap-4 md:gap-5">
                <span className="text-[#656565] text-sm md:text-base">{t('email')}</span>
                <span className="text-[#656565] text-sm md:text-base">{t('phone')}</span>
                <span className="text-[#656565] text-sm md:text-base">{t('location')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start mt-12 md:mt-16">
          <h3 className="text-[#05509F] text-xl md:text-2xl font-bold mb-4 md:mb-6">{t('followUs')}</h3>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/profile.php?id=61575252262841" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/facebook.png" alt="Facebook" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="https://www.tiktok.com/@3capital_financ_advisory?lang=en" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/tiktok.png" alt="TikTok" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="https://www.instagram.com/3capital_financial_advisors?fbclid=IwY2xjawJjdXpleHRuA2FlbQIxMAABHjlJZGO0txXZ1Y5zSyNIMX64arj0f9Am9XOgRu9jf3LeBUooVwLlW8VR-iWZ_aem_oqPYCZSRzFehh_4R4Z64Kg" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/instagram.png" alt="Instagram" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="https://x.com/3capital_advis" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <img src="/xplat.png" alt="X" className="w-10 h-8 md:w-12 md:h-10" />
            </Link>
            <Link href="https://www.linkedin.com/company/3capital-financail-advisors/" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05509F] flex items-center justify-center hover:bg-[#05509F]/90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
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
