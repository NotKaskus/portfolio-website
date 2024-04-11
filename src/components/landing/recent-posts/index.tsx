import { allPosts } from 'contentlayer/generated';
import { sub } from 'date-fns/sub';
import Link from 'next/link';
import { useMemo } from 'react';

import { Rss } from 'lucide-react';

import SectionHeader from '@/components/layout/section-header';
import PostCard from './post-card'

import type { Post } from 'contentlayer/generated';

export default function RecentPost() {
  const recentArticles = allPosts.slice(0, 5);
  const isNewDates = useMemo(
    () =>
      recentArticles.map(
        (post) => sub(new Date(), { days: 30 }) < new Date(post.publishedAt),
      ),
    [recentArticles],
  );

  return (
    <>
      <SectionHeader title="Recent Posts">
        <Link
          href="/rss.xml"
          className="underlined inline-flex items-center gap-2 text-color-blue">
          <p>Subscribe to the RSS feed</p>
          <Rss />
        </Link>
      </SectionHeader>
      <div className="flex flex-col gap-3">
        {recentArticles.map((post: Post, index: number) => {
          return (
            <div key={index} className="post">
              <PostCard data={post} isNew={isNewDates[index]} />
            </div>
          );
        })}
      </div>
    </>
  );
}