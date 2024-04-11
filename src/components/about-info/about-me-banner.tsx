import Image from 'next/image';

export default function AboutMeBanner() {
  return (
    <>
      <Image
        src="/about_me_banner.webp"
        width="3392"
        height="1080"
        sizes="(min-width: 1360px) 1200px, calc(92.69vw - 42px)"
        alt="About Me Banner"
        loading="eager"
        decoding="async"
        className="w-full h-full rounded-md object-cover"
      />
    </>
  );
}