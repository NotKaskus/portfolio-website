import type { Metadata } from 'next';

import HeroSection from '@/components/landing/hero';
import FeaturedProjectsSection from '@/components/landing/featured-projects';
import RecentPost from '@/components/landing/recent-posts';
import SocialsSideBar from '@/components/landing/socials-sidebar';


export function generateMetadata(): Metadata {
  return {
    openGraph: {
      images: [`/api/og?title=Home`],
    },
    twitter: {
      images: [`/api/og?title=Home`],
    },
  };
}

export default function Home() {
  return (
    <div className='flex flex-col gap-8 mx-auto max-w-7xl w-full px-4 md:px-6 md:mt-[5%]'>
      <div className="mb-4">
        <HeroSection />
      </div>
      <div className="mb-4">
        <FeaturedProjectsSection />
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-full lg:col-span-2 gap-8 flex flex-col">
          <div className="flex flex-col gap-4">
            <RecentPost />
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 flex flex-col gap-8">
          <SocialsSideBar />
        </div>
      </div>
    </div>
  );
}
