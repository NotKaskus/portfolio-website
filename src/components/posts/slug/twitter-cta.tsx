import { RiTwitterFill } from "react-icons/ri";

import { cn } from '@/lib/utils';
import { meta } from "@/lib/config";
import { Rss } from "lucide-react";

const TWITTER_HANDLE = meta.accounts.twitter.username;
const link = `https://twitter.com/intent/follow?screen_name=${TWITTER_HANDLE}&twterm=follow`;

export default function TwitterCTA({ className }: { className: string }) {
  return (
    <>
      {TWITTER_HANDLE && 
        <div className={cn("not-prose bg-[#f3f4f7] dark:bg-[#12151c] p-6 lg:p-8 md:rounded-lg flex justify-between items-center flex-wrap gap-6", className)}>
          <div className="inline-flex flex-col flex-1 min-w-70%">
            <h1 className="text-2xl lg:text-3xl font-black mb-4 text-primary ">Enjoyed reading?</h1>
            <p className="max-w-2xl text-lg dark:text-muted-foreground text-wrap-balance">Feel free to follow or reach out to me on Twitter or X whatever yo call it.</p>
          </div>
          <div className="flex-1 space-y-4">
            <a href={link} target="_blank" rel="noreferrer noopener" className="external-link bg-[#fcfcfd] dark:bg-[#0e1016] rounded-xl text-xl font-medium w-full flex justify-center items-center whitespace-nowrap h-fit py-2 px-6 outline-1 outline outline-[#e9ebf1] dark:outline-[#181b25] transition-transform -hover:translate-y-1 decoration-none">
              <RiTwitterFill className="me-4 text-primary" />
              <span className="text-primary">
                Follow Me
              </span>
            </a>
            <a href={link} target="_blank" rel="noreferrer noopener" className="external-link bg-[#fcfcfd] dark:bg-[#0e1016] rounded-xl text-xl font-medium w-full flex justify-center items-center whitespace-nowrap h-fit py-2 px-6 outline-1 outline outline-[#e9ebf1] dark:outline-[#181b25] transition-transform -hover:translate-y-1 decoration-none"> {/** TODO: Change this twitter tweet the post link */}
              <Rss className="me-4 text-primary" />
              <span className="text-primary">
                Subscribe to rss feed
              </span>
            </a>
          </div>
        </div>
      }
    </>
  );
}