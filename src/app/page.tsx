<<<<<<< HEAD
import FeaturedProjects from '@/components/Landing/FeaturedProjects';
import Hero from '@/components/Landing/Hero';
import RecentPost from '@/components/Landing/RecentPost';
import SocialsSideBar from '@/components/Landing/SocialsSideBar';

import type { Metadata } from 'next';

=======
import type { Metadata } from 'next';

import HeroSection from '@/components/landing/hero';
import FeaturedProjectsSection from '@/components/landing/featured-projects';
import RecentPost from '@/components/landing/recent-posts';
import SocialsSideBar from '@/components/landing/socials-sidebar';


>>>>>>> source/main
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
<<<<<<< HEAD
    <main className="flex justify-center w-full mt-[15%] lg:my-[6%] homepage">
      <div className="flex flex-col gap-8 mx-auto max-w-7xl w-full px-4 md:px-6">
        <div className="mb-4">
          <Hero />
        </div>
        <div className="mb-4">
          <FeaturedProjects />
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
    </main>
=======
    <div className='flex flex-col gap-8 mx-auto max-w-7xl w-full px-4 md:px-6'>
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
>>>>>>> source/main
  );
}
