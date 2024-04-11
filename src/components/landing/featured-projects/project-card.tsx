import Image from "next/image";
import Link from "next/link";
import { GitFork, Folder, Star } from "lucide-react";

import type { FeaturedProject, Tech } from "@/types";
import { meta } from '@/lib/config';



export default function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border-[1px] border-black/15 duration-200 ease-in-out hover:bg-gray-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-card/5">
      <div className="p-5 text-left">
        {project.github ? (
          <div className="flex justify-between items-center">
            <Link href={`https://github.com/${meta.accounts.github.username}/${project.github}`} target="_blank">
              <Folder className="inline h-6 w-6 fill-black/10 stroke-black/70 duration-200 motion-reduce:transition-none dark:fill-white/10 dark:stroke-white/70" />{" "}
              <span className='text-md lg:text-lg'>{project.name}</span>
            </Link>
            <div className="flex space-x-2">
              <Link
                href={`https://github.com/${meta.accounts.github.username}/${project.github}/stargazers`}
                className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-gray-200 z-10 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 motion-reduce:transition-none dark:bg-gray-800 dark:text-white/70"
              >
                <Star
                  className="mr-1 inline h-5 w-5 stroke-[#FFFF00] fill-[#FFFF00] duration-200 motion-reduce:transition-none"
                  aria-hidden="true"
                  role="img"
                />
                <span className="ml-1 font-bold">{project.stargazers_count}</span>
              </Link>
              <Link
                href={`https://github.com/${meta.accounts.github.username}/${project.github}/forks`}
                className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-gray-200 z-10 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 motion-reduce:transition-none dark:bg-gray-800 dark:text-white/70"
              >
                <GitFork
                  className="mr-1 inline h-5 w-5 duration-200 motion-reduce:transition-none"
                  aria-hidden="true"
                  role="img"
                />
                <span className="ml-1 font-bold">{project.forks_count}</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <Folder className="inline h-6 w-6 fill-black/10 stroke-black/70 duration-200 motion-reduce:transition-none dark:fill-white/10 dark:stroke-white/70" />{" "}
            <span className='text-md lg:text-lg'>{project.name}</span>
          </>
        )}

        <p className="my-4 text-left dark:text-gray-200">
          {project.description && project.description.length > 90
            ? `${project.description.substring(0, 90)}...`
            : project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 cursor-default mt-2">
          {project.technologies.map((tech: Tech, index) => (
            <div key={index} className="flex items-center">
              <div className="flex cursor-pointer items-center gap-2 rounded-md border border-black/[15%] px-2 py-1 text-sm font-medium text-gray-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:border-neutral-700 dark:hover:bg-white/[5%]">
                {typeof tech.icon === 'string' ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                ) : (
                  tech.icon
                )}{' '}
                <span className='font-bold text-gray-600 dark:text-gray-300'>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
