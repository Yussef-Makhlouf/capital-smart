"use client"

import { useState } from "react"
import { Link } from '@/lib/navigation'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMachinesOpen, setIsMachinesOpen] = useState(false)
  const [isDoorsOpen, setIsDoorsOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  // Close all dropdowns when menu is closed
  const handleMenuClose = () => {
    setIsMenuOpen(false)
    setIsMachinesOpen(false)
    setIsDoorsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" dir={dir}>
      {/* Top Bar */}


      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 md:py-4">
          <div className="flex justify-between items-center relative">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-1.5 sm:gap-2 max-w-[180px] sm:max-w-[200px] md:max-w-none">
              <Link href="/">
                <Image src="/logo2.png" alt="Logo" width={40} height={40} className="h-10 w-auto rounded-full" />
              </Link>
              <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg truncate"> 3Capital  </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6">
              <Link href="/" className="font-semibold text-[#003B95] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95]/90 whitespace-nowrap">
                {t('home')}
              </Link>
              <Link href="/about" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('about')}
              </Link>
              {/* <Link href="/why-us" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('whyUs')}
              </Link> */}
              <Link href="/services" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('services')}
              </Link>
              <Link href="/library" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('library')}
              </Link>
              <Link href="/financial" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('financial')}
              </Link>
              <Link href="/hiring" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('hiring')}
              </Link>
              <Link href="/certificates" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('certificates')}
              </Link>
              <Link href="/contact" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                {t('contact')}
              </Link>
              <div className="flex items-center whitespace-nowrap">
                <LanguageSwitcher />
              </div>
            </nav>

            {/* Contact Button - Hidden on Mobile */}


            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
                <div className="container mx-auto px-4 py-6">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <Image src="/profiles.png" alt="Logo" width={40} height={40} className="h-10 w-auto rounded-full" />
                      <span className="font-bold text-sm">3Capital </span>
                    </div>
                    <button
                      onClick={handleMenuClose}
                      className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      aria-label="Close menu"
                    >
                      <svg width="24" height="24" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="font-semibold text-[#003B95] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('home')}
                    </Link>
                    <Link href="/about" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('about')}
                    </Link>
                    {/* <Link href="/why-us" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('whyUs')}
                    </Link> */}
                    <Link href="/services" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('services')}
                    </Link>
                    <Link href="/library" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('library')}
                    </Link>
                    <Link href="/financial" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('financial')}
                    </Link>
                    <Link href="/hiring" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('hiring')}
                    </Link>

                    <Link href="/certificates" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('certificates')}
                    </Link>
                    <Link href="/contact" className="font-medium text-[#1A1A1A] text-[14px] py-2" onClick={handleMenuClose}>
                      {t('contact')}
                    </Link>
                    <div className="mt-4">
                      <LanguageSwitcher />
                    </div>
                  </nav>
                </div>
              </div>
            )}

            {/* <div className="flex items-center gap-4">
              <LanguageSwitcher />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
