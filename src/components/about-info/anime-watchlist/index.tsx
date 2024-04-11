import { getFavAnimeBanner, type FavAnimeInfo } from '@/lib/anime';
import WatchListCard from './watchlist-card';

export default async function AnimeWatchList() {
  const favAnimeCoverImages = await getFavAnimeBanner();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-primary text-2xl lg:text-3xl font-semibold flex gap-2 items-center mb-2">
          My Anime Watch List
        </h2>
      </div>
      <div className="grid gap-4 watchlist-grid">
        {favAnimeCoverImages.map(
          (favAnimeInfo: FavAnimeInfo, index: number) => {
            return <WatchListCard animeInfo={favAnimeInfo} key={index} />;
          },
        )}
      </div>
    </div>
  );
}