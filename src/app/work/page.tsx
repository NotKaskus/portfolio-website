<<<<<<< HEAD
import React from 'react';
import { VscTerminalBash } from 'react-icons/vsc';

import { RecentProjectCard, type RecentProjectType } from '@/components/Work/RecentProjectCard';
import { OtherProjectCard, type OtherProjectType } from '@/components/Work/OtherProjectCard';

const projects: RecentProjectType[] = [
  {
    name: '~/.dotfiles',
    description:
      'My personal dotfiles that sets up my development environment (automatically!)',
    technologies: [
      {
        name: 'Bash',
        icon: <VscTerminalBash width={20} height={20} className="h-5 w-5" />,
      },
      {
        name: 'Git',
        icon: '/assets/icons/git.svg',
      },
      {
        name: 'VsCode',
        icon: '/assets/icons/vscode.svg',
      },
    ],
    github: 'https://github.com/NotKaskus/dotfiles', // if this is set to null then its closed-source, the github link will not be displayed
    projectBannerImage: {
      src: '/assets/projects/dotfiles/banner.png',
      alt: 'Dotfiles Banner Image',
      width: 1920,
      height: 1080,
    },
    website: null,
    starGazerCount: 0,
    forkCount: 0,
    started: 'Feb 20, 2024'
  },
  {
    name: 'typescript-template',
    description:
      'A template for all my TypeScript projects with ESLint, Prettier, and Tsup',
    technologies: [
      {
        name: 'Typescript', // From vectorlogo.zone
        icon: '/assets/icons/typescript.svg',
      },
      {
        name: 'NodeJS',
        icon: '/assets/icons/nodejs.svg',
      },
      {
        name: 'Eslint',
        icon: '/assets/icons/eslint.svg',
      },
    ],
    github: 'https://github.com/NotKaskus/typescript-template', // if this is set to null then its closed-source, the github link will not be displayed
    projectBannerImage: {
      src: 'https://opengraph.githubassets.com/2cdb167197cf491fc771c56a2ebda80a73819b87478c30eb344473127864aa38/NotKaskus/typescript-template',
      alt: 'Typescript Template Banner Image',
      width: 1920,
      height: 1080,
    },
    website: null,
    starGazerCount: 0,
    forkCount: 0,
    started: 'Feb 5, 2024'
  },
];

const otherProjects: OtherProjectType[] = [];

export default function Work() {
  return (
    <main className="flex justify-center w-full mt-[13%] my-7xl lg:my-[4%] px-4 lg:px-0">
      <div className="mx-auto mb-16 flex max-w-5xl flex-col items-start justify-center">
        <h1 className="mb-2 scroll-mt-20 box-decoration-clone bg-clip-text text-3xl font-black motion-reduce:transition-none">
          My Work
        </h1>
        <p className="text-gray-700 dark:text-neutral-300 mb-6">
          I have been programming for {new Date().getFullYear() - 2021} years,
          and I have worked on many projects. Here are some of my most recent
          projects, you can find more on my Github profile.
        </p>

        {/* Recent Projects Section */}
        <h2 className="scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none mb-3">
          Recent Projects
        </h2>
        {projects.map((project, index) => (
          <RecentProjectCard key={index} project={project} />
        ))}

        {/* Other Projects Section */}
        <h2 className="scroll-mt-20 box-decoration-clone bg-clip-text text-[1.7rem] font-[750] motion-reduce:transition-none mb-3">
          Other Projects
        </h2>
        <div className='mt-3 columns-1 gap-6 text-center text-gray-800 dark:text-white md:columns-2 lg:columns-3'>
          {otherProjects.map((project, index) => (
            <OtherProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
=======
;
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import type { Metadata } from 'next';

import { Project } from "@/types";
import { meta } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function generateMetadata(): Metadata {
  return {
    title: 'Work',
    description: 'I have been programming for almost 3 years, and I have worked on many projects. You can find my most recent projects here.',
    openGraph: {
      images: [`/api/og?title=About`],
    },
    twitter: {
      images: [`/api/og?title=About`],
    },
  };
}

const projects: Project[] = [
  {
    client: "Personal",
    name: "dotfiles",
    description:
      "My dotfiles, managed with dotbot. Contains configurations for zsh, neovim, tmux, and more.",
    image: "banner.png",
    buttons: [
      {
        text: "View on Github",
        link: `https://github.com/${meta.accounts.github.username}/dotfiles`,
        icon: <SiGithub />,
      },
    ],
  },
  {
    note: "You are here!",
    name: "paulandrew",
    description:
      "My personal website, built with Next.js, Tailwindcss and Shadcn-UI!",
    image: "banner.png",
    buttons: [
      {
        text: "View on Github",
        link: "https://paulandrew.vercel.app/",
        icon: <SiGithub />,
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-6 md:px-0 min-h-screen pb-8">
      <div className="space-y-2 my-12 sm:mt-0">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-primary md:text-5xl">
          My projects
        </h1>
        <p className="text-[#1e2024] dark:text-[#dadde7] text-leading-6 text-lg tracking-wide leading-5">
          I have been programming for 3 years, and I have worked on many
          projects. Here are some of my most recent projects, you can find more
          on my Github profile.
        </p>
      </div>

      {/* Thanks eggsy: https://eggsy.xyz/projects */}
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-lg">Jump to:</span>

        {projects.map((project, index) => (
          <Link
            key={`skipto-button-${index}`}
            href={`#${project.name.toLowerCase().split(" ").join("-")}`}
          >
            <Button className="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 w-max">
              {project.name}
            </Button>
          </Link>
        ))}
      </div>

      {projects.map((project, index) => (
        <section
          key={`project-${index}`}
          id={project.name.toLowerCase().split(" ").join("-")}
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            index === 0 ? "mt-24 mb-[10.5rem]" : "my-[10.5rem]"
          }`}
        >
          <div className="space-y-4">
            {project.client && (
              <span className="bg-blue-600/10 block w-max text-sm rounded-lg px-4 text-blue-600 py-1.5 dark:(bg-white/5 text-white/30)">
                {project.client}
              </span>
            )}

            {project.note && (
              <span className="bg-orange-600/10 block w-max text-sm rounded-lg px-4 text-orange-600 py-1.5 dark:(bg-white/5 text-white/30)">
                {project.note}
              </span>
            )}

            <h2 className="text-4xl text-black/90 font-bold dark:text-white/90">
              {project.name}
            </h2>

            <p>{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.buttons.map((button, index) => (
                <Link
                  key={`button-${index}`}
                  href={button.link}
                  target="_blank"
                >
                  <Button className="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 w-max">
                    {button.icon}
                    {button.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <figure
            className={cn(
              "w-full h-full overflow-hidden",
              index % 2 === 0 && "md:order-first"
            )}
          >
            <Image
              src={`/assets/projects/${project.name}/${project.image}`}
              alt={project.name}
              width={1920}
              height={1080}
              loading="lazy"
              className="cursor-zoom-in object-cover w-full rounded-md border border-black/10 dark:border-white/10 medium-zoom-image"
            />
          </figure>
        </section>
      ))}
    </div>
>>>>>>> source/main
  );
}
