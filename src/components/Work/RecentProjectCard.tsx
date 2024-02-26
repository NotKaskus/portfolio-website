import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';

import { parseISO } from '@/lib/utils';
import { Button } from '../ui/button';

export function RecentProjectCard({ project }: { project: Project }) {
  return (
    <div className="mx-auto mb-6 flex flex-col gap-8 overflow-hidden rounded-xl border-[1px] border-black/15 p-8 duration-200 ease-in-out hover:bg-gray-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-card md:flex-row">
      <div className="columns-1">
        <Link href="/test" target="_blank" rel="noopener noreferrer">
          <Image
            src={project.projectBannerImage.src}
            alt={project.projectBannerImage.alt}
            width={project.projectBannerImage.width}
            height={project.projectBannerImage.height}
            className="cursor-zoom-in rounded-xl border-[1px] border-black/[15%] duration-200 hover:opacity-70 dark:border-neutral-800"
          />
        </Link>
      </div>

      <div className="min-w-[50%]">
        <div className="flex justify-between items-center">
          <h3 className="text-left text-3xl font-semibold">{project.name}</h3>
          <div className="flex items-center gap-2 cursor-default">
            <div className="flex items-center">
              <BiStar />
              <span className="ml-1">{project.starGazerCount}</span>
            </div>
            <div className="flex items-center">
              <BiGitRepoForked />
              <span className="ml-1">{project.forkCount}</span>
            </div>
          </div>
        </div>
        <time
          className="my-2 block text-sm font-normal leading-none text-gray-500 dark:text-neutral-500"
          dateTime={new Date(project.started).toUTCString()}>
          {parseISO(new Date(project.started).toString())}
        </time>
        <p className="mt-2 text-left text-gray-700 dark:text-neutral-400 md:w-3/4">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech: Tech, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-black/[15%] px-2 py-1 font-mono text-sm font-medium text-gray-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:border-neutral-700 dark:hover:bg-white/[5%]">
              {typeof tech.icon === 'string' ? (
                <Image src={tech.icon} alt={tech.name} width={20} height={20} className="h-5 w-5" />
              ) : (
                tech.icon
              )}{' '}
              {tech.name}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.website && (
            <Link
              href={project.website}
              className="mt-4"
              target="_blank"
              rel="noopener noreferrer">
              <Button>Visit Website</Button>
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              className="mt-4"
              target="_blank"
              rel="noopener noreferrer">
              <Button>View on Github</Button>
            </Link>
          )}
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
  projectBannerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  started: string;
};

interface Tech {
  name: string;
  icon: string | React.ReactNode;
};
