import type { Metadata } from 'next';

import AboutMeBanner from "@/components/about-info/about-me-banner";
import AboutMe from "@/components/about-info/about-me";
import { Polaroid } from "@/components/about-info/polaroid";
import MyStuff from "@/components/about-info/my-stuff";
import TechStack from "@/components/about-info/technologies";
import AnimeWatchList from "@/components/about-info/anime-watchlist";

export function generateMetadata(): Metadata {
  return {
    title: 'About',
    openGraph: {
      images: [`/api/og?title=About`],
    },
    twitter: {
      images: [`/api/og?title=About`],
    },
  };
}

export default function About() {
  return (
    <div className="flex justify-center w-full my-7xl lg:my-[4%] lg:mt-[1%]">
      <div className="flex flex-col gap-8 mx-auto max-w-7xl w-full px-8 md:px-10">
        <div className='mt-[5px]'>
          <h1 className="mb-5 md:ml-[1.5rem] text-3xl font-bold tracking-tight text-primary md:text-5xl">
            A bit about me
          </h1>
        </div>
        <div className="relative mb-2 inline-block overflow-hidden w-full h-full select-none">
          <AboutMeBanner />
        </div>
        <div className="mb-2">
          <AboutMe />
        </div>
        <div className="mb-[5rem]">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-5xl flex gap-2 items-center mb-2">
            My Socials
          </h2>
          <div className="mx-4 grid grid-cols-12 mt-[4rem]">
            <Polaroid className="col-span-10 col-start-2 md:col-span-5" />
            <div className="group col-span-12 flex h-auto flex-col gap-6 sm:col-span-6 sm:h-full md:col-span-7 md:ml-[3rem]">
              <MyStuff />
            </div>
          </div>
        </div>
        <div className="mb-[5rem]">
          <TechStack />
        </div>
        {/* <div className="mb-2"><Timeline /></div> */}
        <div className="grid gap-4">
          <AnimeWatchList />
        </div>
      </div>
    </div>
  );
}
