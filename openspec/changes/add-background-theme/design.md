# Design: Add Background and Theme Switcher

## Architecture Overview
Implement client-side theme management using React Context and localStorage persistence, with FaultyTerminal as an animated background layer.

## Component Structure

### Theme Management
- **ThemeProvider**: Context provider managing theme state (light/dark/system)
- **ThemeSwitcher**: UI component for theme selection
- **Storage**: localStorage for theme persistence across sessions
- **System Detection**: matchMedia API for system preference detection

### Background Layer
- **FaultyTerminal**: Animated terminal background from reactbits.dev
- **Positioning**: Fixed background layer behind all content
- **Z-index**: Lowest layer to not interfere with interactive elements

## Technology Decisions

### Theme Implementation
- **Approach**: Class-based theming with `.dark` class on `<html>` element
- **Rationale**: Tailwind CSS v4 already configured with dark mode support
- **State Management**: React Context + useState for theme state
- **Persistence**: localStorage with `theme` key

### Theme Switcher Component
- **Source**: Custom implementation based on provided example
- **Options**: Light, Dark, System (follows OS preference)
- **UI**: Toggle or dropdown component with clear visual states
- **Accessibility**: Keyboard navigable, ARIA labels, focus indicators

### FaultyTerminal Integration
- **Source**: https://reactbits.dev/r/FaultyTerminal-TS-TW
- **Placement**: Fixed background on homepage
- **Styling**: Opacity/blur adjustments for readability
- **Performance**: CSS transforms for smooth animation
- **Theme Adaptation**: Different color schemes for light/dark modes

## Accessibility Considerations

### Theme Switcher
- Keyboard accessible (Tab, Enter, Space)
- ARIA labels for screen readers
- Visual focus indicators
- Clear current selection indicator

### Background Effect
- Respects prefers-reduced-motion
- Sufficient contrast with foreground content
- Does not interfere with text selection
- No flickering or rapid animations

## Trade-offs

### Client-Side Theme Management
- **Decision**: Client-side with Context API
- **Rationale**: Simple, no server dependency, instant updates
- **Trade-off**: Brief flash on initial load if theme differs from default

### Background Animation
- **Decision**: Add FaultyTerminal as decorative background
- **Rationale**: Enhances visual interest without compromising usability
- **Trade-off**: Slight performance overhead, but acceptable for modern browsers
