"use client"

import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const t = useTranslations('articles')
  
  // Map of article slugs to their content IDs
  const articleMap: { [key: string]: string } = {
    'investment-decisions': 'article1',
    'virtual-cfo': 'article2',
    'financial-planning': 'article3',
    'digital-transformation': 'article4',
    'risk-management': 'article5',
    'mergers-acquisitions': 'article6',
  }

  const articleId = articleMap[params.slug]
  
  if (!articleId) {
    notFound()
  }

  return (
    <article className="py-28 px-4 sm:px-6 lg:px-[100px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#05509F] mb-8">
          {t(`${articleId}.title`)}
        </h1>
        
        <div className="aspect-video relative mb-8">
          <img 
            src={t(`${articleId}.image`)} 
            alt={t(`${articleId}.title`)}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-6 text-[#475467]">
            <span className="font-medium">{t(`${articleId}.date`)}</span>
            <span className="mx-2">•</span>
            <span className="text-[#05509F]">{t(`${articleId}.category`)}</span>
          </div>
          
          <div className="text-[#475467] leading-relaxed space-y-6  prose-headings:text-[#05509F] prose-headings:font-bold prose-p:mb-4">
            <ReactMarkdown >
              {t(`${articleId}.fullContent`)}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  )
}