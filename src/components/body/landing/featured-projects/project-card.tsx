import Link from "next/link";
import { GitFork, Folder, Star } from "lucide-react";
import { twMerge } from "tailwind-merge";

import type { FeaturedProject, Tech } from "@/lib/types";
import { cn } from "@/lib/utils";
import { meta } from "@/lib/config";

export default function ProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      href={`https://github.com/${meta.accounts.github.username}/${project.github}`}
      target="_blank"
    >
      <div
        className={twMerge(
          `flex flex-col justify-between rounded-lg m-1 bg-black/60 p-6 min-w-80 h-48 space-y-5 border-b-8 cursor-pointer hover:brightness-75 transition-all`,
          project.language.name.toLowerCase() == "javascript"
            ? "border-[#f7df1e]"
            : project.language.name.toLowerCase() == "typescript"
            ? "border-[#007acc]"
            : project.language.name.toLowerCase() == "python"
            ? "border-[#3776ab]"
            : project.language.name.toLowerCase() == "go"
            ? "border-[#00add8]"
            : project.language.name.toLowerCase() == "rust"
            ? "border-[#000000]"
            : project.language.name.toLowerCase() == "ruby"
            ? "border-[#cc342d]"
            : project.language.name.toLowerCase() == "kotlin"
            ? "border-[#f18e33]"
            : project.language.name.toLowerCase() == "c++"
            ? "border-[#00599C]"
            : project.language.name.toLowerCase() == "c#"
            ? "border-[#68217a]"
            : project.language.name.toLowerCase() == "shell"
            ? "border-[#4EAA25]"
            : project.language.name.toLowerCase() == "lua"
            ? "border-[#2C2D72]"
            : "border-[#000000]"
        )}
      >
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-bold">{project.name}</h3>
          <p className="text-wrap truncate line-clamp-2">
            {project.description}
          </p>
        </div>

        <span className="flex justify-between">
          <span className={`flex space-x-3 items-center`}>
            <span
              className={cn(
                `w-5 h-5 rounded-full`,
                project.language.name.toLowerCase() == "javascript"
                  ? "bg-[#f7df1e]"
                  : project.language.name.toLowerCase() == "typescript"
                  ? "bg-[#007acc]"
                  : project.language.name.toLowerCase() == "python"
                  ? "bg-[#3776ab]"
                  : project.language.name.toLowerCase() == "go"
                  ? "bg-[#00add8]"
                  : project.language.name.toLowerCase() == "rust"
                  ? "bg-[#000000]"
                  : project.language.name.toLowerCase() == "ruby"
                  ? "bg-[#cc342d]"
                  : project.language.name.toLowerCase() == "kotlin"
                  ? "bg-[#f18e33]"
                  : project.language.name.toLowerCase() == "c++"
                  ? "bg-[#00599C]"
                  : project.language.name.toLowerCase() == "c#"
                  ? "bg-[#68217a]"
                  : project.language.name.toLowerCase() == "shell"
                  ? "bg-[#4EAA25]"
                  : project.language.name.toLowerCase() == "lua"
                  ? "bg-[#2C2D72]"
                  : "bg-[#000000]"
              )}
            ></span>
            <p className="text-wrap">{project.language.name.toLowerCase()}</p>
          </span>

          <span className="flex flex-row space-x-4 items-center">
            {/* Stargazers Count */}
            <span className="flex items-center space-x-2 text-sm">
              <Star size={16} />
              <p>{project.stargazers_count}</p>
            </span>

            {/* Fork Icon */}
            <span className="flex items-center space-x-2 text-sm">
              <GitFork size={16} />
              <p>{project.forks_count}</p>
            </span>
          </span>
        </span>
      </div>
    </Link>
  );
}
