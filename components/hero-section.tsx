'use client';

import TextPressure from './TextPressure';
import { Button } from './ui/button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-4xl space-y-8">
        <TextPressure
          text="RAQZ*"
          className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        />
        
        <p className="mx-auto max-w-2xl text-lg text-foreground sm:text-xl md:text-2xl">
          Music Creator & Developer
        </p>
        
        <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
          Crafting immersive soundscapes and building innovative digital experiences.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('music')}
            className="text-base"
          >
            View Music
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('projects')}
            className="text-base"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
