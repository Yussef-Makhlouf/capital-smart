"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

export default function ContactSection() {
  const t = useTranslations('contact')

  return (
    <section className="relative py-12 w-full overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-4 lg:px-[100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="flex flex-col items-start gap-10 order-2 lg:order-1 w-full">
            <div className="flex items-start gap-5 w-full">
              <div className="bg-[#EBF2F9] rounded-[40px] py-[10px] px-6">
                <span className="text-primary font-bold text-sm sm:text-base">{t('contactUs')}</span>
              </div>
            </div>

            <div className="space-y-10  w-full">
              <h2 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-[32px]  leading-[1.8]">
                {t('heading')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-start gap-3 p-4 bg-[#F8FAFC] rounded-[20px] hover:bg-[#EBF2F9] transition-colors">
                  <div className="bg-[#EBF2F9] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#05509F"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold text-lg">{t('email')}</h3>
                    <p className="text-[#475467]">info@3capital-advisory.com</p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-3 p-4 bg-[#F8FAFC] rounded-[20px] hover:bg-[#EBF2F9] transition-colors">
                  <div className="bg-[#EBF2F9] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.47V18.97Z" fill="#05509F"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold text-lg"> {t('mobile')}</h3>
                    <p className="text-[#475467]">+20 1029700534</p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-3 p-4 bg-[#F8FAFC] rounded-[20px] hover:bg-[#EBF2F9] transition-colors">
                  <div className="bg-[#EBF2F9] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.47V18.97Z" fill="#05509F"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold text-lg">{t('phone')}</h3>
                    <p className="text-[#475467]">+02 01029700534</p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-3 p-4 bg-[#F8FAFC] rounded-[20px] hover:bg-[#EBF2F9] transition-colors">
                  <div className="bg-[#EBF2F9] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#05509F"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary font-bold text-lg"> {t('workingHours')}</h3>
                    <p className="text-[#475467]">{t('hours')}</p>
                    <p className="text-[#475467]">  {t('weekend')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] order-1 lg:order-2 rounded-[80px] box-shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <img 
                  src="/maps.png" 
                  alt="Location Map" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-32 bg-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute -inset-16 bg-primary/10 rounded-full blur-[50px]" />
                    <div className="relative w-20 h-20 rounded-full bg-primary/20" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
