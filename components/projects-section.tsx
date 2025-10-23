'use client';

import { Project } from '@/types';
import FlowingMenu from './FlowingMenu';

interface ProjectsSectionProps {
  projects: Project[];
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const menuItems = projects.map((project) => ({
    link: project.links[0]?.url || '#',
    text: project.title,
    image: project.image,
  }));

  return (
    <section id="projects" className="py-20">
      <div className="mb-12 text-center px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore my technical work
        </p>
      </div>

      <div className="h-[60vh] bg-transparent overflow-hidden">
        <FlowingMenu items={menuItems} />
      </div>
    </section>
  );
}
