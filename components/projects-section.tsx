"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import type { JSX } from 'react'
import { useTranslations } from 'next-intl'

export default function ProjectsSection({ showButton = true }: { showButton?: boolean }) {
  const [showAllServices, setShowAllServices] = useState(false)
  const t = useTranslations('projects')

  const services = [
    {
      key: 'accounting',
      image: '/profiles.png'
    },
    {
      key: 'supervision',
      image: '/profiles.png'
    },
    {
      key: 'virtualCFO',
      image: '/profiles.png'
    },
    {
      key: 'dueDiligence',
      image: '/profiles.png'
    },
    {
      key: 'zakatTax',
      image: '/profiles.png'
    },
    {
      key: 'management',
      image: '/profiles.png'
    }
  ]

  const allServices = Array(3).fill(null).flatMap(() =>
    services.map(service => ({
      image: service.image,
      alt: t(`services.${service.key}.title`),
      title: t(`services.${service.key}.title`),
      description: t(`services.${service.key}.description`)
    }))
  )

  const displayedServices = showAllServices ? allServices : allServices.slice(0, 6)

  return (
    <section className="py-24 " >
      <div className="container mx-auto px-4 md:px-6 lg:px-[100px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-12 max-w-[876px] mx-auto mb-20">
          <div className="w-full flex justify-center">
            <div className="bg-[#05509F]/10 rounded-[40px] py-[10px] px-6 transform hover:scale-105 transition-transform duration-300">
              <span className="text-[#05509F] font-bold text-xs sm:text-sm">{t('badge')}</span>
            </div>
          </div>

          <h2 className="text-[#05509F] text-3xl sm:text-[42px] md:text-[52px] font-extrabold leading-[1.2] md:leading-[64px] text-center w-full">
            {t('title')}
          </h2>

          <p className="text-black text-sm sm:text-base md:text-lg font-medium leading-7 sm:leading-8 md:leading-10 text-center max-w-[700px]">
            {t('description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {displayedServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center group" >
              <div className="relative w-full aspect-square rounded-[80px] overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-black/35 transition-opacity group-hover:bg-black/50"></div>
                <img src={service.image} alt={service.alt} className="w-full h-full object-cover rounded-[80px]" />
              
                <div className="absolute top-6 right-6 py-2 px-4">
                  <div className="bg-white rounded-[12px] py-1 px-3 flex flex-col items-center gap-1 shadow-md transform transition-transform duration-300 hover:scale-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFB81F">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <span className="text-[#05509F] font-extrabold text-xs sm:text-sm">4.9</span>
                  </div>
                </div>
                <Link href="/services">
                  <img src="/arow1.png" alt="arrow-right" className="w-12 h-12 absolute bottom-6 left-6" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-4 w-full mt-6" dir="auto">
                <p className="text-2xl md:text-[32px] font-bold text-start text-[#05509F]">{service.title}</p>
                <p className="text-[#656565] text-sm sm:text-base md:text-xl font-medium leading-7 sm:leading-8 md:leading-10 ">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center mt-20">
            <Button 
              onClick={() => setShowAllServices(!showAllServices)}
              className="bg-[#E41937] hover:bg-[#E41937]/90 rounded-[40px] h-[70px] px-12 text-white font-bold text-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {showAllServices ? t('showLess') : t('showMore')}
              <img src="/vector.png" alt="arrow-right" className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
