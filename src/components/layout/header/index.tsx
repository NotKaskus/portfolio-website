import Link from "next/link";
import { BiLogoGithub, BiLogoTwitter } from "react-icons/bi";

import { cn } from "@/lib/utils";
import { meta } from "@/lib/config";
import { buttonVariants } from '@/components/ui/button';

import NavBar from './navbar';
import ThemeToggler from './theme-toggler';
import CommandMenu from './command-menu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[73px] max-w-screen-2xl items-center">
				<NavBar />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={`https://github.com/${meta.accounts.github.username}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
								<BiLogoGithub className='h-7 w-7' />
								<span className="sr-only">GitHub Link</span>
							</div>
            </Link>
						<Link
              href={`https://github.com/${meta.accounts.github.username}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
								<BiLogoTwitter className='h-7 w-7' />
								<span className="sr-only">GitHub Link</span>
							</div>
            </Link>
            <ThemeToggler />
          </nav>
        </div>
      </div>
    </header>
  );
}
