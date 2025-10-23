# Tasks: Add Background and Theme Switcher

## Setup

### 1. Install FaultyTerminal component
- Run `npx shadcn@latest add https://reactbits.dev/r/FaultyTerminal-TS-TW`
- Verify component is added to `components/`
- Test component renders with default props
- **Validation**: FaultyTerminal displays correctly
- **Dependencies**: None
- **Parallelizable**: No

### 2. Install next-themes package (optional)
- Evaluate if next-themes is needed or custom implementation
- If using next-themes: `npm install next-themes`
- If custom: skip this task
- **Validation**: Package installed if needed
- **Dependencies**: None
- **Parallelizable**: Yes

## Component Development

### 3. Create ThemeProvider component
- Create `components/theme-provider.tsx`
- Implement React Context for theme state
- Add localStorage persistence logic
- Add system theme detection with matchMedia
- Handle theme changes and updates
- **Validation**: Theme state management works, persists across reloads
- **Dependencies**: Task 2 (if using next-themes)
- **Parallelizable**: No

### 4. Create ThemeSwitcher component
- Create `components/theme-switcher.tsx`
- Implement UI with light/dark/system options
- Connect to ThemeProvider context
- Add keyboard navigation support
- Add ARIA labels and accessibility features
- Style component to match portfolio design
- **Validation**: Switcher changes theme, keyboard accessible, visually clear
- **Dependencies**: Task 3
- **Parallelizable**: No

### 5. Update root layout with theme support
- Update `app/layout.tsx` to wrap children with ThemeProvider
- Add script to prevent flash of unstyled content (FOUC)
- Ensure html element gets dark class when needed
- Test theme persistence on page reload
- **Validation**: Themes apply correctly, no FOUC, persistence works
- **Dependencies**: Task 3
- **Parallelizable**: No

## Integration

### 6. Add FaultyTerminal to homepage
- Update `app/page.tsx` to include FaultyTerminal
- Position as fixed background layer (z-index: -1)
- Configure colors for light and dark themes
- Adjust opacity for content readability
- Test with all content sections
- **Validation**: Background displays correctly, content readable, no interference
- **Dependencies**: Task 1, 5
- **Parallelizable**: No

### 7. Add ThemeSwitcher to navigation/header
- Decide placement (header, fixed position, or floating)
- Add ThemeSwitcher component to chosen location
- Style to fit with overall design
- Ensure visibility on all pages
- **Validation**: Switcher accessible from all pages, well-positioned
- **Dependencies**: Task 4, 5
- **Parallelizable**: Yes (can be done alongside task 6)

## Polish & Testing

### 8. Test theme transitions - [x]
- Test switching between all theme combinations
- Verify smooth transitions without flicker
- Check all components in both themes
- Test FaultyTerminal appearance in both themes
- **Validation**: All themes work correctly, smooth transitions
- **Dependencies**: Tasks 6, 7
- **Parallelizable**: No

### 9. Test accessibility - [x]
- Test keyboard navigation of theme switcher
- Test with screen reader (VoiceOver or NVDA)
- Verify ARIA labels are correct
- Test focus indicators
- **Validation**: Fully keyboard accessible, screen reader compatible
- **Dependencies**: Task 7
- **Parallelizable**: Yes (can be done alongside task 8)

### 10. Test prefers-reduced-motion - [x]
- Enable prefers-reduced-motion in browser
- Verify FaultyTerminal respects the setting
- Ensure static or minimal background shows
- Test with all themes
- **Validation**: Reduced motion preference respected
- **Dependencies**: Task 6
- **Parallelizable**: Yes (can be done alongside tasks 8-9)

### 11. Performance testing - [x]
- Test page load performance with Lighthouse
- Check FaultyTerminal animation performance
- Verify no layout shifts
- Test on lower-end devices if possible
- **Validation**: Performance remains good, no significant degradation
- **Dependencies**: Task 6
- **Parallelizable**: Yes

## Documentation

### 12. Update README - [x]
- Document theme switcher feature
- Add instructions for customizing themes
- Document FaultyTerminal configuration
- **Validation**: Documentation clear and complete
- **Dependencies**: All previous tasks
- **Parallelizable**: Yes
