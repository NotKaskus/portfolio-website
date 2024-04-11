
import Link from "next/link";
import Image from "next/image";
import { SiGithub, SiTwitter } from "react-icons/si";

import { meta } from "@/lib/config";

export default function MyStuff() {
  return (
    <>
      <Link
        href={`https://github.com/${meta.accounts.github.username}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="lights relative h-48 w-full rounded-md hover:cursor-pointer hover:brightness-75 sm:h-full"
      >
        <Image
          fill
          sizes="100"
          quality={100}
          src={"/github_banner.png"}
          className="w-full h-full select-none rounded-md bg-gray-300 object-cover object-bottom opacity-90"
          alt="github banner"
        />

        <SiGithub className="absolute m-4 text-3xl text-pink-100/90 glow-violet-500" />

        <span className="absolute bottom-2 right-4 w-full -space-y-1 text-right">
          <span className="block font-mono text-xl font-bold text-pink-200 md:text-glow-violet-500">
            Github
          </span>
          <span className="display text-base font-bold text-pink-200 sm:block md:text-lg">
            check out my projects &amp; contributions
          </span>
        </span>
      </Link>

			<Link
        href={`https://twitter.com/${meta.accounts.twitter.username}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="lights relative h-48 w-full rounded-md hover:cursor-pointer hover:brightness-75 sm:h-full"
      >
        <Image
          fill
          sizes="100"
          quality={100}
          src={"/twitter_banner.jpg"}
          className="w-full h-full select-none rounded-md bg-gray-300 object-cover object-bottom opacity-90"
          alt="github banner"
        />

        <SiTwitter className="absolute m-4 text-3xl text-pink-100/90 glow-violet-500" />

        <span className="absolute bottom-2 right-4 w-full -space-y-1 text-right">
          <span className="block font-mono text-xl font-bold text-pink-200 md:text-glow-violet-500">
            Twitter
          </span>
          <span className="display text-base font-bold text-pink-200 sm:block md:text-lg">
						check out my tweets &amp; posts
          </span>
        </span>
      </Link>
    </>
  );
}
