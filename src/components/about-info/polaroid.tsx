import React, { type ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from '@/lib/utils';

export function Polaroid({ ...props }: ComponentProps<"div">) {
  return (
    <Link
      className={cn(
        "lights polaroid group min-h-[21rem] bg-[#dbdbdbb3]/70 p-3 hover:cursor-pointer hover:brightness-75",
        "mb-[3rem] flex flex-col backdrop-blur sm:col-span-6 sm:h-[26rem] md:mb-0 md:h-[22rem]",
        props.className,
      )}
      href={'/test'}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="lights relative h-full bg-black/70 backdrop-blur sm:h-full">
        <Image
        fill
          quality={100}
          src="/sunset.jpg"
          className="select-none border opacity-90 brightness-75 hover:brightness-50"
          alt="random picks from my gallery"
        />
      </div>
      <h3 className="mt-3 w-full whitespace-nowrap py-2 text-center font-mono text-lg text-black text-glow-violet-300">
        Photos from my gallery
      </h3>
    </Link>
  );
}