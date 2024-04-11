import { allPosts } from 'contentlayer/generated';
import { compareDesc, parseISO, setHours } from 'date-fns';
import { Feed } from 'feed';

import { meta } from '@/lib/config';

import type { Post } from 'contentlayer/generated';
import type { NextRequest } from 'next/server';

const createPostUrl = (url: string) => {
  return url + '?utm_campaign=feed&utm_source=rss2';
};

function createFeed({ origin }: { origin: NextRequest['nextUrl']['origin'] }) {
  const link = origin;

  const feed = new Feed({
    title: meta.title,
    description: 'This is where i write my thoughts and ideas.',
    id: link,
    link: link,
    language: 'en',
    favicon: `${link}/favicon.ico`,
    copyright: `All rights reserved 2018, ${meta.title}`,
    author: {
      name: meta.author,
      email: meta.accounts.email,
      link: link,
    },
    generator: 'Next.js using Feed for Node.js',
  });

  allPosts
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .forEach((post: Post) => {
      const id = `${link}/posts/${post.slugAsParams}`;
      const url = createPostUrl(id);
      feed.addItem({
        title: post.title,
        id: id,
        link: url,
        description: post.description,
        author: [
          {
            name: meta.author,
            email: meta.accounts.email,
            link: link,
          },
        ],
        date: setHours(parseISO(post.publishedAt), 13),
        category: post.tags.map((name) => ({ name })),
        image: `${link}${post.bannerURL}`,
      });
    });

  return feed.rss2();
}

export function GET(req: NextRequest) {
  const origin =
    process.env.NODE_ENV === 'development'
      ? req.nextUrl.origin
      : process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://localhost:3000';
  const rss = createFeed({ origin });
  return new Response(rss, {
    status: 200,
    headers: {
      'content-type': 'application/rss+xml',
    },
  });
}