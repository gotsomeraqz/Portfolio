import { Music } from '@/types';

export const musicData: Music[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artwork: '/music/midnight-dreams.jpg',
    description: 'An ambient journey through nocturnal soundscapes',
    platforms: [
      { name: 'Spotify', url: 'https://spotify.com' },
      { name: 'Apple Music', url: 'https://music.apple.com' },
      { name: 'SoundCloud', url: 'https://soundcloud.com' },
    ],
  },
  {
    id: '2',
    title: 'Electric Pulse',
    artwork: '/music/electric-pulse.jpg',
    description: 'High-energy electronic beats and synth waves',
    platforms: [
      { name: 'Spotify', url: 'https://spotify.com' },
      { name: 'Apple Music', url: 'https://music.apple.com' },
      { name: 'YouTube', url: 'https://youtube.com' },
    ],
  },
  {
    id: '3',
    title: 'Acoustic Sessions',
    artwork: '/music/acoustic-sessions.jpg',
    description: 'Intimate acoustic performances and original compositions',
    platforms: [
      { name: 'Spotify', url: 'https://spotify.com' },
      { name: 'Bandcamp', url: 'https://bandcamp.com' },
    ],
  },
];
