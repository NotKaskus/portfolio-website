import React from 'react';

import SectionHeader from '../SectionHeader';
import RepoCard from './FeaturedProjects/RepoCard';

// TODO: Fetch this from github instead of manually setting it
const projects = [
  {
    name: 'typescript-template',
    description: 'A project template for all my projects that use typescript',
    tags: ['nodejs', 'typescript'],
    repoLink: 'https://github.com/NotKaskus/typescript-template',
    url: 'https://github.com/NotKaskus/typescript-template',
    starGazerCount: 0,
    forkCount: 0,
  },
  {
    name: '~/.dotfiles',
    description: 'My dotfiles for configuring for literally everything (automatically!)',
    tags: ['zsh', 'bash'],
    repoLink: 'https://github.com/NotKaskus/dotfiles',
    url: 'https://github.com/NotKaskus/dotfiles',
    starGazerCount: 0,
    forkCount: 0,
  },
];

export default function FeaturedProjects() {
  return (
    <>
      <SectionHeader title="Featured Projects" />
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
