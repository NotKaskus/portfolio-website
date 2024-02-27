import Link from 'next/link';
import React from 'react';
import { VscTerminalBash } from 'react-icons/vsc';
import { FaLink } from "react-icons/fa6";

import SectionHeader from '../SectionHeader';
import RepoCard from './FeaturedProjects/RepoCard';

// TODO: Fetch this from github instead of manually setting it
const projects = [
  {
    name: 'typescript-template',
    description: 'A project template for all my projects that use typescript',
    technologies: [
      {
        name: 'Typescript',
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
    github: 'https://github.com/NotKaskus/typescript-template',
    website: 'https://github.com/NotKaskus/typescript-template',
    starGazerCount: 0,
    forkCount: 0,
  },
  {
    name: '~/.dotfiles',
    description:
      'My dotfiles for configuring for literally everything (automatically!)',
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
    github: 'https://github.com/NotKaskus/dotfiles',
    website: 'https://github.com/NotKaskus/dotfiles',
    starGazerCount: 0,
    forkCount: 0,
  },
];

export default function FeaturedProjects() {
  return (
    <>
      <SectionHeader title="Featured Projects">
        <Link
          href="/work"
          className="underlined inline-flex items-center gap-2 text-color-blue motion-reduce:transition-none">
          <p>See more projects</p>
          <FaLink />
        </Link>
      </SectionHeader>
      <div className="space-y-4 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {projects.map((project, index) => (
            <RepoCard project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
