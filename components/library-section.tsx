"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { Link } from '@/lib/navigation'
import { useLocale } from 'next-intl'

type Article = {
  id: number
  title: string
  description: string
  category: string
  date: string
  image: string
  link: string
}

export default function LibrarySection({ showButton = true }: { showButton?: boolean }) {
  const t = useTranslations('librarySection');
  const [activeCategory, setActiveCategory] = useState("all")

  const articles: Article[] = [
    {
      id: 1,
      title: t('articles.article1.title'),
      description: t('articles.article1.description'),
      category: t('categories.investment'),
      date: t('articles.article1.date'),
      image: "/cover1.jpg",
      link: "/articles/investment-decisions"
    },
    {
      id: 2,
      title: t('articles.article2.title'),
      description: t('articles.article2.description'),
      category: t('categories.management'),
      date: t('articles.article2.date'),
      image: "/article3.jpg",
      link: "/articles/virtual-cfo"
    },
    {
      id: 3,
      title: t('articles.article3.title'),
      description: t('articles.article3.description'),
      category: t('categories.planning'),
      date: t('articles.article3.date'),
      image: "/article2.jpg",
      link: "/articles/financial-planning"
    },
    {
      id: 4,
      title: t('articles.article4.title'),
      description: t('articles.article4.description'),
      category: t('categories.digital'),
      date: t('articles.article4.date'),
      image: "/cover3.jpg",
      link: "/articles/digital-transformation"
    },
    {
      id: 5,
      title: t('articles.article5.title'),
      description: t('articles.article5.description'),
      category: t('categories.risk'),
      date: t('articles.article5.date'),
      image: "/pro2.jpg",
      link: "/articles/risk-management"
    },
    {
      id: 6,
      title: t('articles.article6.title'),
      description: t('articles.article6.description'),
      category: t('categories.merger'),
      date: t('articles.article6.date'),
      image: "/pro5.jpg",
      link: "/articles/mergers-acquisitions"
    }
  ]

  const categories = [
    { id: "all", label: t('categoryFilters.all') },
    { id: t('categories.investment'), label: t('categories.investment') },
    { id: t('categories.management'), label: t('categories.management') },
    { id: t('categories.planning'), label: t('categories.planning') },
    { id: t('categories.digital'), label: t('categories.digital') },
    { id: t('categories.risk'), label: t('categories.risk') },
    { id: t('categories.merger'), label: t('categories.merger') }
  ]

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter(article => article.category === activeCategory)

  return (
    <section className="relative py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          <div className="flex items-center gap-5">
            <div className="bg-[rgba(5,80,159,0.1)] rounded-[40px] px-5 py-[10px]">
              <span className="text-[#05509F] text-[14px] font-bold">{t('sectionBadge')}</span>
            </div>
          </div>

          <h2 className="text-[#05509F] text-3xl sm:text-4xl lg:text-[52px] font-extrabold leading-tight lg:leading-[53px] text-center">
            {t('sectionTitle')}
          </h2>

          <p className="text-[#475467] text-lg font-medium leading-8 text-center max-w-[800px]">
            {t('sectionDescription')}
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-[40px] py-[10px] px-6 h-[58px] transition-colors ${activeCategory === category.id
                  ? "bg-[#05509F] text-white"
                  : "bg-[#EBF2F9] text-[#475467]"
                  }`}
              >
                <span className="font-bold text-sm whitespace-nowrap">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-[200px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#05509F] text-white text-sm font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-[#475467] text-sm mb-4">
                  <span>{article.date}</span>
                </div>

                <h3 className="text-[#05509F] text-xl font-bold mb-3">
                  {article.title}
                </h3>

                <p className="text-[#475467] text-base mb-6">
                  {article.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full bg-[#05509F] text-white hover:bg-[#05509F]/90"
                  asChild
                >
                  <Link href={`/articles/${article.link.split('/').pop()}`}>
                    {t('readMore')}
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                      <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          {showButton && (
            <Link href={'/library'}>
              <Button className="bg-[#EC2127] hover:bg-[#EC2127]/90 rounded-[40px] h-[58px] px-8 text-white font-bold text-base gap-2">
                {t('viewMoreArticles')}
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.25 12.75L5.75 5.25M5.75 5.25V12M5.75 5.25H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute left-[-60px] sm:left-[-90px] md:left-[-114px] top-[-40px] sm:top-[-50px] md:top-[-66px] w-[200px] sm:w-[250px] md:w-[328px] h-[200px] sm:h-[250px] md:h-[328px] bg-[#05509F] opacity-5 blur-[30px] sm:blur-[40px] md:blur-[50px] rounded-full"></div>
    </section>
  )
}