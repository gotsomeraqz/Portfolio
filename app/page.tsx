import ClickSparkWrapper from '@/components/click-spark-wrapper';
import HeroSection from '@/components/hero-section';
import SkillsSection from '@/components/skills-section';
import MusicSection from '@/components/music-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import ThemedPixelBlast from '@/components/themed-pixel-blast';
import { musicData } from '@/data/music';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skills';

export default function Home() {
  return (
    <ClickSparkWrapper>
      {/* PixelBlast Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <ThemedPixelBlast />
      </div>

      <main className="min-h-screen bg-background relative z-10">
        <HeroSection />
        <SkillsSection skills={skillsData} />
        <ProjectsSection projects={projectsData} />
        <MusicSection music={musicData} />
        <ContactSection />
      </main>
    </ClickSparkWrapper>
  );
}
