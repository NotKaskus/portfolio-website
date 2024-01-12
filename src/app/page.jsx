import Hero from '@/components/Hero';
import RecentPosts from '@/components/RecentPosts';
import FeaturedProjects from '@/components/FeaturedProjects';
import SocialsSidebar from '@/components/SocialsSidebar';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-8 mx-auto max-w-7xl w-full px-4 md:px-6'>
        <div className='mb-1'>
          <Hero />
        </div>
        <div className='mb-2'>
          <FeaturedProjects />
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <RecentPosts />
          <div className='col-span-full lg:col-span-1 flex flex-col gap-8'>
            <SocialsSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
