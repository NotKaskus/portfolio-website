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
  );
}
