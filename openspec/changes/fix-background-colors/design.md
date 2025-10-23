# Design: Fix FaultyTerminal Background Colors

## Architecture Overview
Update FaultyTerminal background parameters to provide better visual integration and avoid stark black/white color schemes that create poor contrast.

## Current Issues
- Background appears too stark with "pitch black and white" colors
- Poor integration with light/dark theme switching
- Insufficient visual subtlety for background element
- Colors don't complement the portfolio's color scheme

## Proposed Solution

### Color Scheme Updates
```typescript
// Before (problematic)
tint={isDark ? "#7dd3fc" : "#0ea5e9"}  // Stark blue colors
brightness={isDark ? 0.6 : 0.9}      // High contrast
scanlineIntensity={isDark ? 0.25 : 0.15} // Too prominent

// After (improved)
tint={isDark ? "#1e293b" : "#f1f5f9"}  // Subtle slate colors
brightness={isDark ? 0.3 : 0.4}      // Much lower for subtlety
scanlineIntensity={isDark ? 0.1 : 0.08} // More subtle
```

### Color Rationale
- **Dark Theme**: Use muted slate colors (`#1e293b`) that complement dark backgrounds
- **Light Theme**: Use soft gray colors (`#f1f5f9`) that work with light backgrounds
- **Brightness**: Reduced to 30-40% for background subtlety
- **Scanlines**: Minimized to avoid visual distraction

### Theme Integration
- Colors should be barely perceptible as background elements
- Maintain sufficient contrast for content readability
- Work seamlessly with theme transitions
- Avoid competing with foreground content

## Implementation Details

### Background Layer Configuration
- Position: `fixed inset-0 -z-10` (behind all content)
- Opacity: Reduced to prevent overwhelming content
- Blend mode: Consider subtle blend modes for better integration

### Performance Considerations
- Low brightness values maintain performance
- Minimal color calculations
- No additional rendering overhead

## Accessibility Considerations
- Ensure background doesn't interfere with text readability
- Maintain sufficient color contrast ratios
- Consider reduced motion preferences (though background is subtle)
- Background should not cause visual strain

## Testing Requirements
- Test in both light and dark themes
- Verify content readability over background
- Check performance impact
- Test across different screen sizes
- Ensure no visual conflicts with other elements
