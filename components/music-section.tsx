import { Music } from '@/types';
import MusicExpandableCards from './music-expandable-cards';

interface MusicSectionProps {
  music: Music[];
}

export default function MusicSection({ music }: MusicSectionProps) {
  return (
    <section id="music" className="py-20 bg-muted/50">
      <div className="mb-12 text-center px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Music
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Listen to my latest releases
        </p>
      </div>

      <div className="px-6">
        <MusicExpandableCards music={music} />
      </div>
    </section>
  );
}
