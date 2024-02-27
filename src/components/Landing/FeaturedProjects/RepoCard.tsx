import { FolderIcon, StarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiGitRepoForked } from 'react-icons/bi';

export default function RepoCard({ project }: { project: Project }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border-[1px] border-black/15 duration-200 ease-in-out hover:bg-gray-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-card">
      <div className="p-5 text-left">
        {project.github ? (
          <div className="flex justify-between items-center">
            <Link href={project.github} target="_blank">
              <FolderIcon className="inline h-6 w-6 fill-black/10 stroke-black/70 duration-200 motion-reduce:transition-none dark:fill-white/10 dark:stroke-white/70" />{' '}
              {project.name}
            </Link>
            <div className='flex space-x-2'>
              <Link
                href={`${project.github}/stargazers`}
                className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/10">
                <StarIcon
                  className="mr-1 inline h-5 w-5 stroke-black/50 duration-200 motion-reduce:transition-none dark:stroke-white/70 dark:group-hover:stroke-white"
                  aria-hidden="true"
                  role="img"
                />
                <span className="ml-1">{project.starGazerCount}</span>
              </Link>
              <Link
                href={`${project.github}/forks`}
                className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/10">
                <BiGitRepoForked
                  className="mr-1 inline h-5 w-5 stroke-black/50 duration-200 motion-reduce:transition-none dark:stroke-white/70 dark:group-hover:stroke-white"
                  aria-hidden="true"
                  role="img"
                />
                <span className="ml-1">{project.forkCount}</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <FolderIcon className="inline h-6 w-6 fill-black/10 stroke-black/70 duration-200 motion-reduce:transition-none dark:fill-white/10 dark:stroke-white/70" />{' '}
            {project.name}
          </>
        )}

        <p className="my-4 text-left">
          {project.description && project.description.length > 90
            ? `${project.description.substring(0, 90)}...`
            : project.description}
        </p>

        <div className="flex items-center gap-2 cursor-default mt-2">
          {project.technologies.map((tech: Tech, index) => (
            <div key={index} className="flex items-center">
              <div className="flex cursor-pointer items-center gap-2 rounded-md border border-black/[15%] px-2 py-1 font-mono text-sm font-medium text-gray-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:border-neutral-700 dark:hover:bg-white/[5%]">
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
                {tech.name}
              </div>
            </div>
          ))}
          {/* {project.github && (
            <>
              <Link
                href={`${project.github}/stargazers`}
                className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/10">
                <StarIcon
                  className="mr-1 inline h-5 w-5 stroke-black/50 duration-200 motion-reduce:transition-none dark:stroke-white/70 dark:group-hover:stroke-white"
                  aria-hidden="true"
                  role="img"
                />
                <span className="ml-1">{project.starGazerCount}</span>
              </Link>
              <Link
                href={`${project.github}/forks`}
                className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/10">
                <BiGitRepoForked
                  className="mr-1 inline h-5 w-5 stroke-black/50 duration-200 motion-reduce:transition-none dark:stroke-white/70 dark:group-hover:stroke-white"
                  aria-hidden="true"
                  role="img"
                />
                <span className="ml-1">{project.forkCount}</span>
              </Link>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}

export interface Project {
  name: string;
  description: string;
  technologies: Tech[];
  github: string | null;
  website: string | null;
  starGazerCount: number;
  forkCount: number;
}

interface Tech {
  name: string;
  icon: string | React.ReactNode;
}
