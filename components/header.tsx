"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMachinesOpen, setIsMachinesOpen] = useState(false)
  const [isDoorsOpen, setIsDoorsOpen] = useState(false)

  // Close all dropdowns when menu is closed
  const handleMenuClose = () => {
    setIsMenuOpen(false)
    setIsMachinesOpen(false)
    setIsDoorsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
   

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 md:py-4">
          <div className="flex justify-between items-center relative">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-1.5 sm:gap-2 max-w-[180px] sm:max-w-[200px] md:max-w-none">
              <Image src="/profiles.png" alt="Logo" width={48} height={48} className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto rounded-full" />
              <span className="font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg truncate"> Capital smart </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1.5 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-6">
              <Link href="/" className="font-semibold text-[#003B95] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95]/90 whitespace-nowrap">
                الصفحة الرئيسية
              </Link>
              <Link href="/about" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                من نحن
              </Link>
              <Link href="/why-us" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                لماذا نحن؟
              </Link>
              <Link href="/services" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                الخدمات
              </Link>
              <Link href="/library" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                المكتبة والمقالات
              </Link>
              <Link href="/financial" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                حجز استشارة
              </Link>
              <Link href="/hiring" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                الوظائف والتدريب
              </Link>
              <Link href="/contact" className="font-medium text-[#1A1A1A] text-[13px] xl:text-[14px] 2xl:text-[15px] hover:text-[#003B95] whitespace-nowrap">
                اتصل بنا
              </Link>
              <Button 
                className="bg-[#003B95] hover:bg-[#003B95]/90 rounded-[20px] sm:rounded-[24px] h-[32px] sm:h-[36px] md:h-[38px] px-3 sm:px-4 md:px-6 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap transition-all duration-200"
                onClick={() => {
                  // TODO: Implement language switching logic
                  console.log('Switch to English')
                }}
              >
                <span className="font-semibold text-[11px] sm:text-[12px] md:text-[13px] text-white">English</span>
              </Button>
            </nav>

            {/* Contact Button - Hidden on Mobile */}
       

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
                <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
                  <div className="flex justify-between items-center mb-6 sm:mb-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Image src="/logo.png" alt="Logo" width={40} height={40} className="h-8 sm:h-10 w-auto" />
                      <span className="font-bold text-xs sm:text-sm">شركة إعمار المتحدة للمصاعد</span>
                    </div>
                    <button
                      onClick={handleMenuClose}
                      className="p-1.5 sm:p-2"
                      aria-label="Close menu"
                    >
                      <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <nav className="flex flex-col gap-3 sm:gap-4">
                    <Link href="/" className="font-semibold text-[#003B95] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      الصفحة الرئيسية
                    </Link>
                    <Link href="/about" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      من نحن
                    </Link>
                    <Link href="/why-us" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      لماذا نحن؟
                    </Link>
                    <Link href="/services" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      الخدمات
                    </Link>
                    <Link href="/library" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      المكتبة والمقالات
                    </Link>
                    <Link href="/financial" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      حجز استشارة
                    </Link>
                    <Link href="/hiring" className="font-medium text-[#1A1A1A] text-[13px] sm:text-[14px] md:text-[15px] py-1.5 sm:py-2" onClick={handleMenuClose}>
                      الوظائف والتدريب
                    </Link>
                    <Button 
                      className="bg-[#003B95] hover:bg-[#003B95]/90 rounded-[20px] sm:rounded-[24px] h-[32px] sm:h-[36px] md:h-[38px] px-3 sm:px-4 md:px-6 flex items-center gap-1.5 sm:gap-2 justify-center mt-3 sm:mt-4"
                      onClick={() => {
                        // TODO: Implement language switching logic
                        console.log('Switch to English')
                      }}
                    >
                      <span className="font-semibold text-[11px] sm:text-[12px] md:text-[13px] text-white">English</span>
                    </Button>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
