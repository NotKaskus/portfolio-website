import { meta } from '@/lib/config';

const featured_projects_data = [
  {
    name: "typescript-template",
    description: "A project template for all my projects that use typescript",
    technologies: [
      {
        name: "Typescript",
        icon: "/assets/icons/typescript.svg",
      },
      {
        name: "NodeJS",
        icon: "/assets/icons/nodejs.svg",
      },
      {
        name: "Eslint",
        icon: "/assets/icons/eslint.svg",
      },
    ],
    github: "typescript-template",
    website: `https://github.com/${meta.accounts.github.username}/typescript-template`,
  },
  {
    name: "~/.dotfiles",
    description:
      "My dotfiles for configuring for literally everything (automatically!)",
    technologies: [
      {
        name: "Bash",
        icon: "/assets/icons/bash.svg",
      },
      {
        name: "Git",
        icon: "/assets/icons/git.svg",
      },
      {
        name: "VsCode",
        icon: "/assets/icons/vscode.svg",
      },
    ],
    github: "dotfiles",
    website: `https://github.com/${meta.accounts.github.username}/dotfiles`,
  },
];

function githubFetch<T>(path: string): Promise<T> {
  return fetch("https://api.github.com" + path, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.GITHUB_KEY
        ? `token ${process.env.GITHUB_KEY}`
        : "",
    },
  }).then((x) => x.json() as Promise<T>);
}

export const featured_projects = Promise.all(
  featured_projects_data.map(async (project) => {
    const githubPath = `/repos/${meta.accounts.github.username}/${project.github}`;
    const data = (await githubFetch(githubPath)) as {
      stargazers_count: number;
      forks_count: number;
    };
    return {
      ...project,
      stargazers_count: data.stargazers_count,
      forks_count: data.forks_count,
    };
  })
);