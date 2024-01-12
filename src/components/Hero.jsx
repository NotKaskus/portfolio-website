import React, { lazy, Suspense } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
const ExternalLinks = lazy(() => import('./ExternalLink'));
const Socials = lazy(() => import('./Socials'));

export default function Hero() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="md:mt-0 md:col-span-5 md:flex md:order-last order-first">
          <Image
            src="/avatar.webp"
            alt="avatar.webp"
            fill
            sizes="100vw"
            priority
            className="relative w-full rounded-md outline outline-1 mx-auto object-fit: contain"
          />
        </div>
        <div className="mt-4 mr-auto place-self-center lg:col-span-7 lg:text-left lg:order-first leading-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-center md:text-left tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mx-auto lg:mx-0">
            Hi, I&apos;m Paul Andrew
          </h1>
          <div className="subtitle max-w-2xl mb-6 font-light text-muted-foreground text-justify md:text-left lg:mb-8 text-lg lg:text-xl mx-auto lg:mx-0">
              <p>
                  I&apos;m 17 year old first-year senior highschool student from Philippines. I&apos;m currently open to internship/project opportunities.
              </p>
              <p>
                  Im currently learning about <Suspense fallback={<div>Loading...</div>}><ExternalLinks variant='python' /></Suspense>, cyber security, and algorithm. In my free time i like watching animes and play CS2.
              </p>
              <p>
                  I&apos;ve watched 42 animes and spent 432 hrs 41 mins coding this year.
              </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href='/'>
              <Button className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border text-primary rounded-lg bg-primary-700 transition-all'>
                Contact
              </Button>
            </Link>
            <Link href='/'>
              <Button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-secondary border border-gray-300 rounded-lg dark:text-secondary transition-all">
                Donwload CV
              </Button>
            </Link>
          </div>
          <Suspense fallback={<div>Loading...</div>}><Socials /></Suspense>
        </div>                
      </div>
    </section>
  )
}