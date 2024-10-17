import Link from "next/link";

import { meta, nav } from "@/lib/config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import NavBar from './navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[73px] max-w-screen-2xl items-center">
        {/* NAV */}
				<NavBar />

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link
              href={`https://github.com/${meta.accounts.github.username}`}
              target="_blank"
              rel="noreferrer"
            ></Link>

            {nav.right.map((item) => (
              <Link
                href={item.href}
                target={item.target}
                rel="noreferrer"
                key={item.title}
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
									<item.Icon />
									<span className='sr-only'>{item.title}</span>
								</div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
