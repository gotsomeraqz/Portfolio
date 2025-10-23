'use client';

import LogoLoop from './LogoLoop';
import { Skill } from '@/types';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>
        
        <LogoLoop
          logos={skills.map(skill => ({
            src: skill.logo,
            alt: skill.name,
            title: skill.name,
          }))}
          speed={40}
          logoHeight={40}
          gap={48}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
        />
      </div>
    </section>
  );
}
