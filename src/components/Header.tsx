import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa6';

import { meta } from '@/lib/config';
import { cn } from '@/lib/utils';
import MobileNav from './Nav/MobileNav';
import NavBar from './Nav/NavBar';
import ThemeToggler from './ThemeToggler';
import { buttonVariants } from './ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[73px] max-w-screen-2xl items-center">
        <NavBar />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none" />
          <nav className="flex items-center">
            <Link
              href={`https://github.com/${meta.accounts.github.username}`}
              target="_blank"
              rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}>
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={`https://www.instagram.com/${meta.accounts.twitter.username}`}
              target="_blank"
              rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}>
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggler />
          </nav>
        </div>
      </div>
    </header>
  );
}
