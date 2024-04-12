import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

import { ThemeProvider } from '@/providers/theme-provider'

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { meta } from '@/lib/config';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://localhost:3000',
  ),
  title: {
    default: meta.title,
    template: '%s | ' + meta.title,
  },
  description: meta.description,
  openGraph: {
    siteName: meta.siteName,
    title: meta.title,
    description: meta.description,
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          <main className='flex justify-center w-full mt-[10%] md:mt-[3%] lg:mt-[2%] lg:mb-[6%] homepage'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
