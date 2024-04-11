import Image from 'next/image';
import Link from 'next/link';

import { Progress } from "@/components/ui/progress";
import { type FavAnimeInfo } from '@/lib/anime';

export default function WatchListCard({
  animeInfo,
}: {
  animeInfo: FavAnimeInfo;
}) {
  return (
    <>
      <Link href={animeInfo.siteUrl} target="_blank">
        <article className="watchlist-item rounded relative group">
          <div className="z-2 rounded outline outline-1 outline-[#f3f4f7] dark:outline-[#12151c] group-hover:-translate-y-6 transition-250 overflow-hidden group-hover:shadow-xl">
            <Image
              src={animeInfo.coverImage}
              alt="Anime cover image for current watchlist"
              loading="lazy"
              width={500}
              height={750}
              decoding="async"
              className="z-2 w-full h-full object-cover aspect-[2/3] opacity-100 outline outline-1 outline-[#f3f4f7] dark:outline-[#12151c]"
            />
            <Progress 
              className='border-none w-full h-[3px] absolute bottom-0'
              value={(animeInfo.progress / (!animeInfo.episodes ? 0 : Number(animeInfo.episodes))) * 100} 
            />
            <span className="sr-only">Progress</span>
            <div className="opacity-0 group-hover:opacity-100 h-full duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-center text-sm bg-black/40 text-white font-semibold">
              <p className='text-center text-white'>
                {animeInfo.title}
              </p>
            </div>
          </div>
          <div className="z-0 flex text-sm w-full color-text-400 justify-between items-baseline absolute opacity-0 bottom-0 transition-300 ease-in-out group-hover:opacity-100">
            <p className="mr-2 color-text-200 font-semibold text-xs">
              {' '}
              {/* TODO: Fix the formating here is ugly and the animation its static make it smooth */}
              Episode
            </p>
            <p>EP {animeInfo.progress}</p>
          </div>
        </article>
      </Link>
    </>
  );
}