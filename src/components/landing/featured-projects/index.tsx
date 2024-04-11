import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

import SectionHeader from "@/components/layout/section-header";
import ProjectCard from "./project-card";

import { featured_projects } from "@/content/projects/featured";

export default async function FeaturedProjectsSection() {

  return (
    <>
      <SectionHeader title="Featured Projects">
        <Link
          href="/work"
          className="underlined inline-flex items-center gap-2 hover:text-blue-300 hover:underline motion-reduce:transition-none"
        >
          <p>See more projects</p>
          <LinkIcon />
        </Link>
      </SectionHeader>
      <div className="space-y-4 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {(await featured_projects).map((project, index) => (
            <ProjectCard project={{ ...project }} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
