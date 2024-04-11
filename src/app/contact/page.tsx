<<<<<<< HEAD
import Link from 'next/link';

import Contact from '@/components/Contact';
import { contact } from '@/lib/config';

import type { Metadata } from 'next';
=======
import Link from "next/link";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { contact } from "@/lib/config";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
>>>>>>> source/main

export function generateMetadata(): Metadata {
  return {
    title: 'Contact',
<<<<<<< HEAD
=======
    description: 'Need help with anything? Want to get in touch? Send me a message!',  
>>>>>>> source/main
    openGraph: {
      images: [`/api/og?title=Contact`],
    },
    twitter: {
      images: [`/api/og?title=Contact`],
    },
  };
}

export default function page() {
  return (
<<<<<<< HEAD
    <main className="p-6 min-h-screen mb-[10px]">
      <h2 className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none mt-6 text-center text-4xl">
        Contact me
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
          .
        </span>
      </h2>
      <p className="text-gray-700 dark:text-neutral-300 text-center">
        I&apos;m always open to new opportunities and projects.
      </p>
      <div className="relative">
        <div className="relative mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative mx-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-black/15 bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
            <Contact />
          </div>
          <div className="space-y-4 p-4">
            <p className=" text-xl font-semibold">Or contact me with...</p>
            {contact.links.map((Element, index) => (
              <Link
                href={Element.href}
                key={index}
                target="_blank"
                className="group ml-auto mt-2 flex h-12 w-full items-center gap-3 rounded-md border bg-[#f8f9fa] px-4 py-2 text-sm font-semibold text-blue-900 duration-200 hover:bg-[#f2f3f5] motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
                {<Element.Icon />} {Element.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
=======
    <div className="max-w-screen-lg mx-auto px-6 md:px-0 md:min-h-screen pb-8 md:mt-[4rem]">
      <div className="space-y-2 my-12 sm:mt-0">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-primary md:text-5xl">
          Contact
        </h1>
        <p className="text-[#1e2024] dark:text-[#dadde7] text-leading-6 text-lg tracking-wide leading-5">
          If you have any questions, feel free to contact me. I&apos;m always
          open to new opportunities and projects.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {contact.links.map((Element, index) => (
          <Link
            key={index}
            href={Element.href}
            target="_blank"
            className="rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between border-[.1px]"
          >
            <div className="overflow-x-hidden leading-relaxed space-y-2">
              <h2 className="font-medium text-black dark:text-white truncate">
                {Element.title}
              </h2>

              <p className="dark:text-gray-200 text-sm line-clamp-2">
                {Element.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <Element.Icon className="h-8 w-8" />
            </div>
          </Link>
        ))}
      </div>
    </div>
>>>>>>> source/main
  );
}
