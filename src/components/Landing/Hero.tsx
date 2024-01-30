import Image from 'next/image';

import Socials from './HeroSection/Socials';
import { meta } from '@/lib/config';

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-8">
      <div className="flex flex-col gap-4 flex-grow-0 max-w-[44rem] text-xl leading-8">
        <h1 className="text-6xl md:text-5xl lg:text-7xl font-black text-primary mb-2">
          Hi, I&apos;m Paul.
        </h1>

        <div className="text-[#3f424a] dark:text-[#acb2c9] flex flex-col gap-4">
          <p>
            I&apos;m 17 year old second-year senior highschool student and
            self-taught developer from Philippines. I mainly focused on the
            field of backend development and cybersecurity.
          </p>
          <p>
            Aside from programming, I enjoy traveling and watching anime, with
            favorites like One Piece and Attack on Titan. I&apos;m also a fan of
            playing Roblox, with BRM5 as my preferred game.
          </p>
          <p>
            Feel free to contact me for any reason, even if it&apos;s just to chat.
            You can contact me through Discord or send an email to
            {meta.accounts.email}.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 text-3xl">
            <Socials />
          </div>
        </div>
      </div>
      <div className="relative w-full lg:max-w-[390px] max-w-[300px] aspect-ratio-1 flex-shrink-0 group h-min flex-col-reverse">
        <span className="rounded-md image-container -z-1 outline outline-1"></span>
        <Image
          id="custom-avatar"
          alt="Profile picture"
          quality={100}
          className="rounded-md z-2 outline outline-1 outline-body-500 h-full"
          src="/avatar.webp"
          width={400}
          height={400}
          loading="eager"
          priority
          sizes="(min-width: 1040px) 390px, (min-width: 380px) 300px, calc(53.33vw + 108px)"
        />
      </div>
    </div>
  );
}
