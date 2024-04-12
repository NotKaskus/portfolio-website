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
    <div className="max-w-screen-lg mx-auto px-6 md:px-[3rem] lg:px-0 min-h-screen pb-8">
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
  );
}
