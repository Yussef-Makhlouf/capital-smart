"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useTranslations } from "next-intl"

export default function AboutSection() {
  const t = useTranslations('about')
  const [counts, setCounts] = useState({
    awards: 0,
    reviews: 0,
    projects: 0,
    experience: 0
  })

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000 // Animation duration in milliseconds
      const steps = 50 // Number of steps in the animation
      const interval = duration / steps

      const targetCounts = {
        awards: 5,
        reviews: 15,
        projects: 23,
        experience: 16
      }

      let currentStep = 0

      const timer = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts(targetCounts)
          return
        }

        setCounts({
          awards: Math.floor((targetCounts.awards / steps) * currentStep),
          reviews: Math.floor((targetCounts.reviews / steps) * currentStep),
          projects: Math.floor((targetCounts.projects / steps) * currentStep),
          experience: Math.floor((targetCounts.experience / steps) * currentStep)
        })

        currentStep++
      }, interval)

      return () => clearInterval(timer)
    }
  }, [inView])

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FAFAFA]" dir="auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-[1695px] mx-auto">
          {/* Badge */}
          <div className="w-full flex " >
            <div className="bg-white rounded-[15px] sm:rounded-[30px] md:rounded-[40px] py-[6px] sm:py-[8px] md:py-[10px] px-4 sm:px-5 md:px-6 flex items-center" >
              <span className="text-[#05509F] font-bold text-[10px] sm:text-xs md:text-sm">{t('badge')}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[#05509F] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-extrabold leading-tight lg:leading-[64px] w-full">
            {t('heading')}
          </h2>

          {/* Description */}
          <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-5 sm:leading-6 md:leading-7 lg:leading-8 w-full">
            {t('description')}
          </p>
        </div>

        {/* Statistics Grid */}
        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-x-5 gap-y-4 sm:gap-y-8 md:gap-y-[40px] mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] max-w-[1695px] mx-auto">
          {[
            {
              image: "/abo1.png",
              count: counts.experience,
              label: t('stats.experience'),
              number: "4"
            },
            {
              image: "/abo2.png",
              count: counts.projects,
              label: t('stats.projects'),
              number: "3"
            },
            {
              image: "/abo3.png",
              count: counts.reviews,
              label: t('stats.reviews'),
              number: "2",
              isK: false
            },
            {
              image: "/abo4.png",
              count: counts.awards,
              label: t('stats.awards'),
              number: "1"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-[15px] sm:rounded-[30px] md:rounded-[40px] w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[380px] relative">
              <div className="absolute left-3 sm:left-6 md:left-10 -top-[15px] sm:-top-[25px] md:-top-[29px] w-[30px] sm:w-[40px] md:w-[58px] h-[30px] sm:h-[40px] md:h-[58px] bg-[#05509F] rounded-[10px] sm:rounded-[15px] md:rounded-[19px] flex items-center justify-center" dir="ltr">
                <img src={item.image} alt={`Number ${item.number}`} className="w-10 sm:w-16 md:w-24 h-5 sm:h-8 md:h-12" />
              </div>
              <div className="absolute bottom-3 sm:bottom-6 md:bottom-[40px] inset-x-3 sm:inset-x-6 md:inset-x-[40px] flex flex-col gap-0.5 sm:gap-1 md:gap-2">
                <h3 className="text-[#05509F] text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-extrabold">
                  {item.isK ? `${Math.floor(item.count / 1000)}k` : item.count} +
                </h3>
                <p className="text-black text-[10px] sm:text-xs md:text-sm lg:text-base">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute left-[-60px] sm:left-[-90px] md:left-[-114px] top-[-40px] sm:top-[-50px] md:top-[-66px] w-[200px] sm:w-[250px] md:w-[328px] h-[200px] sm:h-[250px] md:h-[328px] bg-[#05509F] opacity-5 blur-[30px] sm:blur-[40px] md:blur-[50px] rounded-full"></div>
    </section>
  )
}