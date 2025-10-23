import Image from 'next/image';
import { Music } from '@/types';
import { Button } from './ui/button';

interface MusicCardProps {
  music: Music;
}

export default function MusicCard({ music }: MusicCardProps) {
  return (
    <div className="flex flex-col h-full p-4">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4 flex-shrink-0">
        <Image
          src={music.artwork}
          alt={`${music.title} artwork`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
            {music.title}
          </h3>
          <p className="text-sm text-black dark:text-zinc-400 mb-4 line-clamp-3">
            {music.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {music.platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="outline"
              size="sm"
              asChild
              className="text-xs h-8"
            >
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.name}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
