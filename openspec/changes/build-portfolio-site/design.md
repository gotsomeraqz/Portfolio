# Design: Build Portfolio Site

## Architecture Overview
Single-page application (SPA) built with Next.js App Router, featuring a component-based architecture with clear separation between layout, content sections, and interactive elements.

## Component Structure

### Layout Hierarchy
```
app/
├── layout.tsx (root layout with metadata)
├── page.tsx (main portfolio page)
└── components/
    ├── hero-section.tsx (with TextPressure animation)
    ├── skills-section.tsx (with LogoLoop component)
    ├── music-section.tsx
    ├── projects-section.tsx (with FlowingMenu component)
    ├── click-spark-wrapper.tsx (ClickSpark for interactive effects)
    └── ui/ (shadcn and reactbits components)
```

### Key Components

#### HeroSection
- **Purpose**: Landing section with name, tagline, and visual impact
- **Features**: TextPressure animation for name display with dynamic text effects
- **Interactions**: Smooth scroll to sections on CTA click

#### SkillsSection
- **Purpose**: Showcase technical skills and technologies
- **Features**: LogoLoop component displaying technology logos in continuous animation
- **Layout**: Horizontal scrolling loop of skill badges/logos

#### MusicSection
- **Purpose**: Showcase music releases and streaming links
- **Data Structure**: Array of music items with title, artwork, description, platform links
- **Layout**: Grid of music cards with hover effects

#### ProjectsSection
- **Purpose**: Display technical projects with details
- **Features**: FlowingMenu component for interactive project navigation
- **Data Structure**: Array of projects with title, description, tech stack, links, images
- **Layout**: Flowing menu interface for browsing projects

#### ClickSparkWrapper
- **Purpose**: Add interactive visual feedback on user clicks
- **Features**: ClickSpark animation triggered on mouse/touch interactions
- **Integration**: Wraps main content areas to provide engaging click feedback

#### Navigation
- **Purpose**: Section navigation (may be integrated with FlowingMenu or separate)
- **Behavior**: Highlights active section on scroll, smooth scrolling to sections

## Technology Decisions

### UI Framework: shadcn/ui
- **Rationale**: Provides accessible, customizable components without runtime overhead
- **Components to use**: Card, Button, Badge (for tech stack tags)
- **Installation**: Via CLI, components copied into project

### Interactive Components: reactbits.dev
- **TextPressure**: Dynamic text animation for hero name display
  - Source: https://reactbits.dev/r/TextPressure-TS-TW
  - Usage: Hero section name with pressure-sensitive text effects
- **LogoLoop**: Continuous logo carousel for skills
  - Source: https://reactbits.dev/r/LogoLoop-TS-TW
  - Usage: Skills section technology showcase
- **ClickSpark**: Click/touch interaction effects
  - Source: https://reactbits.dev/r/ClickSpark-TS-TW
  - Usage: Global click feedback throughout the portfolio
- **FlowingMenu**: Fluid navigation menu
  - Source: https://reactbits.dev/r/FlowingMenu-TS-TW
  - Usage: Projects section navigation and browsing
- **Integration**: All TypeScript + Tailwind versions for consistency
- **Performance**: Lazy-load where appropriate to optimize initial page load

### Styling Approach
- **Tailwind CSS v4**: Utility-first styling for rapid development
- **Dark mode**: System preference detection with manual toggle
- **Responsive breakpoints**: Mobile-first (sm, md, lg, xl)
- **Color scheme**: Professional palette with accent colors for CTAs

### Data Management
- **Static content**: Hardcoded in component files initially
- **Type safety**: TypeScript interfaces for Music and Project data structures
- **Future-ready**: Structure allows easy migration to CMS or API

## Performance Considerations

### Image Optimization
- Use Next.js `<Image>` component for all images
- Provide appropriate sizes and formats (WebP with fallbacks)
- Lazy load images below the fold

### Code Splitting
- PixelBlast component lazy-loaded with `next/dynamic`
- Separate chunks for each major section if needed

### SEO & Metadata
- Comprehensive metadata in root layout
- Open Graph tags for social sharing
- Semantic HTML structure

## Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for all images
- Sufficient color contrast ratios

## Trade-offs

### Single-page vs Multi-page
- **Decision**: Single-page with sections
- **Rationale**: Simpler navigation, better for portfolio browsing, easier to maintain
- **Trade-off**: Less SEO granularity per section, but acceptable for portfolio use case

### Static vs Dynamic Content
- **Decision**: Static content initially
- **Rationale**: Faster development, no backend needed, easy to deploy
- **Trade-off**: Requires code changes to update content, but acceptable for infrequent updates

### Component Library
- **Decision**: shadcn/ui over Material-UI or Chakra
- **Rationale**: No runtime bundle, full customization, modern design patterns
- **Trade-off**: More setup required, but better long-term flexibility
