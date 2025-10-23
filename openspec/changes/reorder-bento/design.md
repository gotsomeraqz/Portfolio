# Design: Reorder Sections and Add Bento Grid

## Architecture Overview
Implement section reordering and bento grid layouts to improve content hierarchy and visual presentation while maintaining responsive design and accessibility.

## Component Structure

### Section Ordering
```
app/page.tsx
├── BackgroundLayer
├── HeroSection
├── ProjectsSection (moved to first position)
├── MusicSection (moved to second position)
├── SkillsSection
└── ClickSparkWrapper
```

### Bento Grid Integration
- **BentoGrid**: From @aceternity/bento-grid package
- **Layout**: Responsive grid with varying item sizes
- **Responsive**: Adapts to different screen sizes
- **Accessibility**: Maintains keyboard navigation and screen reader support

## Technology Decisions

### Bento Grid Component
- **Source**: @aceternity/bento-grid
- **Integration**: Installed via shadcn CLI
- **Usage**: Replace current uniform grid layouts
- **Customization**: Configurable item sizes and responsive breakpoints

### Section Reordering
- **Logic**: Projects first (most important work), Music second (creative output), Skills third (technical background)
- **Rationale**: Better content hierarchy and user flow
- **Implementation**: Simple component reordering in main page

### Responsive Design
- **Breakpoints**: Maintain existing sm/md/lg/xl responsive behavior
- **Grid Adaptation**: Bento grid adjusts item sizes based on viewport
- **Performance**: No additional performance overhead

## Implementation Details

### Bento Grid Configuration
```typescript
// Example configuration for projects
const projectItems = [
  {
    title: "AI Music Generator",
    description: "ML model for music generation",
    size: "lg", // Large item
    image: "/projects/ai-music.jpg",
    links: [...]
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with animations",
    size: "md", // Medium item
    image: "/projects/portfolio.jpg",
    links: [...]
  },
  // ... more items
];
```

### Section Flow
1. **Hero**: Introduction and name
2. **Projects**: Primary showcase (most important)
3. **Music**: Creative work showcase
4. **Skills**: Technical background

## Accessibility Considerations

### Bento Grid Navigation
- Keyboard accessible item navigation
- Screen reader announcements for each grid item
- Focus indicators on interactive elements
- Logical tab order through grid items

### Content Structure
- Semantic HTML maintained
- ARIA labels where needed
- Color contrast preserved
- Text readability maintained

## Trade-offs

### Bento Grid vs Uniform Grid
- **Decision**: Bento grid for visual interest
- **Rationale**: More engaging layout, better content hierarchy
- **Trade-off**: Slightly more complex implementation, potential layout shifts

### Section Order
- **Decision**: Projects before Music
- **Rationale**: Projects represent core professional work
- **Trade-off**: Music enthusiasts might prefer music first, but projects are more universally important
