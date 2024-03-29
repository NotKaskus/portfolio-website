'use client';

import { formatDistance } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import readingTime from 'reading-time';

import type { Blog } from 'contentlayer/generated';

export default function SmallPostCard({ data, isNew }: CardOptions) {
  return (
    <Link
      href={`/blogs/${data.slugAsParams}`}
      rel="prefetch"
      className="flex group @container h-full transition-transform duration-300 transform-gpu rounded border bg-background">
      <div
        className="flex flex-row flex-1 relative h-full"
        style={{ height: '300px' }}>
        <div className="z-1 flex-1">
          <div className="flex flex-col gap-2 px-4 py-4">
            <h2 className="text-lg font-medium leading-5 w-fit text-primary">
              {data.title}
            </h2>
            <p className="text-sm text-muted-foreground whitespace-normal leading-6">
              {data.description}
            </p>
            <time
              className="text-xs text-primary leading-3"
              dateTime={String(new Date(data.publishedAt))}>
              Posted{' '}
              {formatDistance(new Date(data.publishedAt), new Date(), {
                addSuffix: true,
              })}
            </time>
          </div>
          <hr className="w-full border-none bg-gradient-to-r from-[#b3b7bb] dark:from-[#50535e] to-transparent h-[1px]" />
          <ul className="flex px-4 py-2 gap-2 flex-wrap text-xs text-primary">
            <div className="text-primary">
              {readingTime(data.body.raw, { wordsPerMinute: 150 }).text}
            </div>
            <div className="h-full w-[1px] mr-1">
              <span>|</span>
            </div>
            {data.tags.map((tag, index) => (
              <div key={index} className="pr-2">
                {tag}
              </div>
            ))}
          </ul>
        </div>
        {data.banner && (
          <div
            style={{ aspectRatio: '16/9' }}
            className="hidden sm:block display-none @xl:display-block rounded overflow-hidden z-2 max-w-[200px] w-full object-cover h-full ml-auto flex-shrink-0">
            {isNew && (
              <div className="new-tag hidden sm:block display-none z-2 tracking-wider font-bold text-xs absolute right-0 top-0 text-center rounded m-2 px-2 bg-brand-900 color-white">
                NEW
              </div>
            )}
            <Image
              width={500}
              height={500}
              alt="Banner for article generated by midjourney"
              loading="lazy"
              className="article-image object-cover absolute min-w-[200px] w-auto max-w-[200px] right-0 z-1 rounded-r image-overlay transition-all h-full"
              src={data.bannerURL}
            />
          </div>
        )}
      </div>
    </Link>
  );
}

interface CardOptions {
  data: Blog;
  isNew: boolean;
}
