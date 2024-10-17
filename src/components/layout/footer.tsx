import Link from 'next/link';

import { footer, meta } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="mx-auto w-full px-4 py-10 pt-10 font-sans md:px-8 lg:px-16 mt-10">
      <div className="grid grid-cols-2 gap-9 md:grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center">
          <Link href="/">
            <span className="flex cursor-pointer items-center text-2xl font-semibold">
              {meta.title}
              <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">
                .
              </span>
            </span>
          </Link>

          <p className="my-3 text-gray-700 dark:text-neutral-300">
            Created with ❤️ and ☕ in Philippines using{' '}
            <Link href="https://nextjs.org" target={'_blank'}>
              Next.js
            </Link>
          </p>

          <p className="mb-4 text-gray-700 opacity-85 dark:text-neutral-300">
						This website is inspired by <Link href='https://xetera.dev' target={'_blank'}>Xetera's</Link> website.
          </p>
        </div>
        {footer.categories.map((category: FooterCategory, index: number) => (
          <div
            key={index}
            className="col-span-1 text-gray-700 dark:text-neutral-300">
            <p className="mt-3 font-semibold text-gray-800 dark:text-white sm:mb-3 sm:mt-0 ">
              {category.title}
            </p>
            <div>
              {category.links.map((link: FooterItems, index: number) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.target ?? '_self'}
                  className="mt-2 block duration-100 hover:text-gray-700 hover:underline motion-reduce:transition-none dark:hover:text-gray-300">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-end text-center text-gray-700 dark:text-neutral-300">
        <p className="font-semibold">
          &copy; 2019 - {new Date().getFullYear()} {meta.title}, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

interface FooterItems {
  title: string;
  href: string;
  target?: string;
}

interface FooterCategory {
  title: string;
  links: FooterItems[];
}