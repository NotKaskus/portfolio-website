import Link from "next/link";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { contact } from "@/lib/config";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export function generateMetadata(): Metadata {
  return {
    title: 'Contact',
    description: 'Need help with anything? Want to get in touch? Send me a message!',  
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
    <div className="max-w-screen-lg mx-auto px-6 md:px-0 md:min-h-screen pb-8 md:mt-[2%]">
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
  );
}
