import { type Post } from 'contentlayer/generated';
import { formatDistance } from 'date-fns';
import Image from 'next/image';

export default function PostHeader({ content }: { content: Post }) {
  return (
    <>
      <div className="flex gap-4 font-sans items-center">
        <div className="gap-6 items-center text-sm lg:text-base font-sans whitespace-nowrap inline-flex text-[#5865f2] font-extrabold uppercase tracking-wider">
          {content.readingTime.text}
        </div>
      </div>

      <h1 className="m-0 article-title text-primary text-2xl sm:text-3xl md:text-5xl font-black z-1 leading-relaxed">
        {content.title}
      </h1>

      <Image
        alt="Banner image"
        sizes="(min-width: 500px) 800px, 400px"
        width={1600}
        height={(1600 * 9) / 16}
        src={content.bannerURL}
        loading="eager"
        priority
        className="article-banner my-10 aspect-ratio-[16/9] shadow-lg w-full rounded-lg outline outline-1 outline-body-800 object-cover"
      />

      <h2 className="mt-0 text-[#50535e] dark:text-[#dadde7] text-xl lg:text-2xl z-1 mb-8 text-center font-article">
        {content.description}
      </h2>

      <hr className="mt-2 mb-2 border-top-1 w-full h-[1px] bg-[#f3f4f7] dark:bg-[#12151c] col-span-full transition-all" />

      <div className="flex gap-3 text-[#acb2c9] items-baseline justify-between flex-wrap text-xs md:text-sm lg:text-base font-sans">
        <div className="list-none m-0 p-0 font-medium flex gap-4 uppercase z-1 flex-wrap text-xs">
          {
            content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm outline outline-1 outline-[#e9ebf1] bg-[#f3f4f7] text-[#282a2f] dark:outline-[#181b25] dark:bg-[#12151c] dark:text-[#cbcedd] px-5 py-2">
                {tag}
              </span>
            ))
          }
        </div>
        <span className="font-normal">
          Published{' '}
          <time
            dateTime={new Date(content.publishedAt).toISOString()}
            className="text-[#17181c] dark:text-[#eceef3]">
            {formatDistance(content.publishedAt, new Date(), {
              addSuffix: true,
            })}
          </time>
        </span>
      </div>
    </>
  );
}