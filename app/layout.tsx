import type { Metadata } from 'next';
import './globals.css';
import './fonts/fonts.css';

export const metadata: Metadata = {
  title: 'Capital Smart - Financial & Business Consulting',
  description: 'Your trusted partner in financial and business consulting services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

