# RAQZ* Portfolio

A modern, interactive portfolio showcasing RAQZ*'s music releases and technical projects with engaging animations and responsive design.

## Features

- **Interactive Animations**: TextPressure for hero name, LogoLoop for skills, ClickSpark for click feedback, FlowingMenu for projects
- **Music Showcase**: Display music releases with streaming platform links
- **Projects Gallery**: Technical projects with descriptions, tech stacks, and links
- **Skills Section**: Animated technology logo carousel
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: System preference detection with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Interactive Components**: reactbits.dev (TextPressure, LogoLoop, ClickSpark, FlowingMenu)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── hero-section.tsx    # Hero with TextPressure animation
│   ├── skills-section.tsx  # Skills with LogoLoop
│   ├── music-section.tsx   # Music releases grid
│   ├── music-card.tsx      # Individual music card
│   ├── projects-section.tsx # Projects with FlowingMenu
│   ├── click-spark-wrapper.tsx # Click feedback wrapper
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── music.ts            # Music releases data
│   ├── projects.ts         # Projects data
│   └── skills.ts           # Skills/technologies data
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    ├── music/              # Music artwork images
    ├── projects/           # Project screenshots
    └── skills/             # Technology logos
```

## Updating Content

### Music Releases

Edit `data/music.ts` to add or modify music releases:

```typescript
{
  id: 'unique-id',
  title: 'Song Title',
  artwork: '/music/artwork.jpg',
  description: 'Brief description',
  platforms: [
    { name: 'Spotify', url: 'https://...' },
    // Add more platforms
  ],
}
```

### Projects

Edit `data/projects.ts` to add or modify projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Project description',
  techStack: ['React', 'Node.js', ...],
  image: '/projects/image.jpg',
  links: [
    { type: 'live', url: 'https://...', label: 'View Live' },
    { type: 'code', url: 'https://...', label: 'View Code' },
  ],
}
```

### Skills

Edit `data/skills.ts` to add or modify technologies:

```typescript
{
  name: 'Technology Name',
  logo: '/skills/logo.svg',
  category: 'frontend' | 'backend' | 'tools' | 'other',
}
```

### Personal Information

Update the following files:
- `components/hero-section.tsx` - Name and tagline
- `app/layout.tsx` - Metadata and SEO information

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` directory to your hosting platform.

## License

MIT
