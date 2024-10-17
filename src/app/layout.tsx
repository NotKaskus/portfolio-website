import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import "@/styles/globals.css";

import { ThemeProvider } from '@/providers/theme-provider';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

import { meta } from '@/lib/config';

const inter = Inter({ subsets: ["latin"] });

// TODO: Add website metadata here after done with everything

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Header />
          <main className='flex justify-center w-full mt-[10%] md:mt-[3%] lg:mt-[2%] lg:mb-[6%] homepage'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
	)
}