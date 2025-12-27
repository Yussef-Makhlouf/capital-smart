import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import '../globals.css';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });
import '../fonts/fonts.css';

export const metadata: Metadata = {
  title: '3Capital  - Financial & Business Consulting',
  description: 'Your trusted partner in financial and business consulting services',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locale || !['en', 'ar'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/translations/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="">
        <NextIntlClientProvider locale={locale} messages={messages}>
   
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
   
              <Footer />
            </div>
    
        </NextIntlClientProvider>
      </body>
    </html>
  );
}