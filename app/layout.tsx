import type { Metadata, Viewport } from 'next';
import './globals.css';
import './fonts/fonts.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: '3Capital - استشارات مالية وأعمال | خبراء التمويل والاستثمار',
  description: 'شركة 3Capital للاستشارات المالية والأعمال - خبراء في التمويل والاستثمار والاستشارات المالية. نقدم حلولاً استشارية متكاملة مع خبرة تزيد عن 16 عاماً',
  keywords: [
    'استشارات مالية',
    'استشارات أعمال',
    'تمويل',
    'استثمار',
    'محاسبة',
    'تخطيط مالي',
    'إدارة الثروات',
    'استشارات ضريبية',
    'تقييم شركات',
    'دراسات جدوى',
    'مدير مالي افتراضي',
    'استشارات اقتصادية',
    'خدمات محاسبية',
    'تحليل مالي',
    'استشارات استثمارية'
  ],
  authors: [{ name: '3Capital Financial Consultants' }],
  creator: '3Capital Financial Consultants',
  publisher: '3Capital Financial Consultants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // viewport moved to separate export
  category: 'Financial Consulting',
  openGraph: {
    title: '3Capital - استشارات مالية وأعمال | خبراء التمويل والاستثمار',
    description: 'شركة 3Capital للاستشارات المالية والأعمال - خبراء في التمويل والاستثمار والاستشارات المالية. نقدم حلولاً استشارية متكاملة مع خبرة تزيد عن 16 عاماً',
    url: 'http://3capital-advisory.com',
    siteName: '3Capital Financial Consultants',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Capital - استشارات مالية وأعمال',
    description: 'خبراء في التمويل والاستثمار والاستشارات المالية',
    creator: '@3capital',
    site: '@3capital',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="http://3capital-advisory.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}

