import GithubProfileCard from './GithubProfileCard';
import { SongSkeleton } from './spotify/SpotifySongSkeleton';

export default function SocialsSidebar() {
  return (
    <div className='overflow-hidden flex flex-col gap-4'>
        <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className='text-lg text-primary font-semibold flex gap-2 items-center mt-1'>My Socials</h2>
        </div>
        <aside className="grid gap-6 overflow-hidden grid-cols-1">
          <div>
            <GithubProfileCard />
          </div>

          <div>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className='text-lg text-primary font-semibold flex gap-2 items-center mt-1'>Liked Spotify Tracks 🎧</h2>
            </div>
            <div className="flex items-center text-primary uppercase font-medium text-xs tracking-widest mb-3">
              <span className="min-w-[24px] h-[1px] bg-body-700"></span>
              <div className="px-2 whitespace-nowrap">
                21 days ago
              </div>
              <span className="w-full h-[1px] bg-body-700"></span>
            </div>
            <div className='flex flex-col gap-6'>
              <a href="https://open.spotify.com/track/2vjY3jGKElvqXoaGNEuYef" target="_blank">
                <SongSkeleton />
              </a>
            </div>
          </div>
        </aside>
    </div>
  )
}
