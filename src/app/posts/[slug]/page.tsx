import { allPosts, type Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { cache } from "react";

import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";

import PostHeader from "@/components/posts/slug/post-header";
import TwitterCTA from "@/components/posts/slug/twitter-cta";

export function generateMetadata({ params }: postPageParams): Metadata {
  const post = getpostFromParams(params.slug);

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      images: [post.bannerURL],
      type: "article",
    },
    twitter: {
      images: [post.bannerURL],
    },
  };
}

export function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

const getpostFromParams = cache((slug: string): Post => {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  return post;
});

const mdxComponent: MDXComponents = {
  img: ({ src, alt, width, height }) => (
    <Image
      src={src!}
      alt={alt!}
      width={width as number}
      height={height as number}
      className="rounded-md shadow-md"
    />
  ),
};

export default function postPage({ params }: postPageParams) {
  const post = getpostFromParams(params.slug);
  const Content = getMDXComponent(post.body.code);

  return (
    <article className="flex flex-col mx-auto prose max-w-full prose-code:before:content-none prose-code:after:content-none text-base w-full mt-[15%] md:mt-[5%]">
      <header className="w-full px-6 pt-6xl pb-3xl article-grid">
        <PostHeader content={post} />
      </header>
      <main className="main-article text-[#17181b] dark:text-[#dadde7] article-grid px-6 lg:px-0 larger-line-height text-xl lg:text-2xl leading-10 my-2xl leading-looser w-full">
        <Content components={{ ...mdxComponent }} />
      </main>
      <div className="w-full h-full relative">
        <hr className="mt-2 mb-2 border-top-1 w-full h-[1px] bg-[#f3f4f7] col-span-full transition-all" />
        <div className="article-grid relative z-2 py-12">
          <TwitterCTA className="z-2" />
        </div>
        <div className="overlay rotate-180 z-0"></div>
      </div>

      {/* TODO: Add scroll to top button */}
    </article>
  );
}

interface postPageParams {
  params: { slug: string };
}
