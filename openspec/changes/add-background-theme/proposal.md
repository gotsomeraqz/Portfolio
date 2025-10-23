# Add Background and Theme Switcher

## Why
Enhance visual appeal with an animated terminal background effect and provide users control over theme preference (light/dark/system) for better personalization and accessibility.

## What Changes
- Add FaultyTerminal background component to homepage for visual interest
- Add ThemeSwitcher component for manual theme control
- Integrate theme provider for persistent theme state management
- Update layout to support theme switching with proper class toggling
- Ensure FaultyTerminal works well in both light and dark modes

## Impact
- **Affected specs**: ui-foundation (modified), background-effects (new), theme-management (new)
- **Affected code**:
  - `app/layout.tsx` - Add theme provider and dark class management
  - `app/page.tsx` - Integrate FaultyTerminal background
  - `components/theme-switcher.tsx` - New theme switcher component
  - `components/theme-provider.tsx` - New theme context provider
  - `components/FaultyTerminal.tsx` - New background component from reactbits
