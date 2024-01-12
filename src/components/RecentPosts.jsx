import Link from 'next/link';
import BlogCard from './BlogCard';
import { getAllArticles } from '@/scripts/Content';
import { sub } from "date-fns";

export default async function RecentPosts() {
  const recentArticles = (await getAllArticles().catch(() => [])) ?? [];
  return (
    <div className='col-span-full lg:col-span-2 homepage-grid gap-8 flex flex-col'>
      <div className='flex justify-between items-center flex-wrap gap-2 lg:ml-4'>
          <h2 className="text-2xl lg:text-3xl tracking-tight font-extrabold text-primary flex gap-3 items-center">
              Recent Posts 📝
          </h2>
          <Link slot="aside" href='/rss.xml' className='underlined inline-flex items-center gap-2'>
            <p>Subscribe to the RSS feed</p>
          </Link> 
      </div>
      <div className='posts flex flex-col gap-3 lg:ml-4'>
        {recentArticles.map((post, index) => {
          const isNew = sub(new Date(), { days: 30 }) < post.date;

          return (
            <div key={index} className='post'>
              <BlogCard data={post} isNew={isNew} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
