import { Suspense } from "react";
import type { Metadata } from 'next';

import { allPosts } from "contentlayer/generated";
import PostList from "@/components/posts/post-list";

export function generateMetadata(): Metadata {
  return {
    title: 'Posts',
    openGraph: {
      images: [`/api/og?title=About`],
    },
    twitter: {
      images: [`/api/og?title=About`],
    },
  };
}

export default function Posts() {
  return (
    <div className='mx-auto mb-16 flex max-w-3xl flex-col justify-center px-8 md:px-0'>
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-center mt-[4%]">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Posts
        </h1>
        <p className="mb-4 text-gray-600 dark:text-[#c2c2c2]">
          I&apos;ve been writing online since 2021, mostly about web devlopment and
          random stuff. In total, I&apos;ve written 2 articles on my blog. Use the
          search below to filter by title.
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <PostList allPosts={allPosts} />
        </Suspense>
      </div>
    </div>
  );
}
