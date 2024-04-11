import AniList from 'anilist-node';

import type { ListEntry } from 'anilist-node';

const anilist = new AniList(process.env.ANILIST_API_KEY);

async function getUserFavorite(): Promise<ListEntry[]> {
  const profile = await anilist.lists.anime(5318187);
  return profile.filter((obj) => obj.name === 'Watching')[0].entries;
}

async function getAnimeInfo(): Promise<FavAnimeInfo[]> {
  const favAnimes = await getUserFavorite();
  const animeList = favAnimes.map((anime) => {
    return {
      id: anime.media.id,
      progress: anime.progress,
    };
  });

  const animeData = await Promise.allSettled(
    animeList.map((anime) => {
      return anilist.media.anime(anime.id);
    }),
  );

  const favAnimeInfoArray = animeData.map((data, index) => {
    if (
      data.status === 'fulfilled' &&
      data.value &&
      data.value.coverImage.large &&
      data.value.siteUrl
    ) {
      return {
        coverImage: data.value.coverImage.large,
        progress: animeList[index].progress,
        siteUrl: data.value.siteUrl,
        title: data.value.title.english,
        episodes: data.value.episodes,
      };
    } else {
      console.warn(`Missing or invalid data for anime: ${animeList[index].id}`);
      return {
        coverImage:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105156-ZVtxISdoUqnY.png',
        progress: 0,
        siteUrl: 'https://anilist.co/',
        title: 'Undefined',
        episodes: null,
      };
    }
  });

  return favAnimeInfoArray;
}

export async function getFavAnimeBanner(): Promise<FavAnimeInfo[]> {
  return await getAnimeInfo();
}

export interface FavAnimeInfo {
  coverImage: string;
  progress: number;
  siteUrl: string;
  title: string;
  episodes: number | null;
}