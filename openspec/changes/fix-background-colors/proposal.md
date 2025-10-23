# Fix FaultyTerminal Background Colors

## Why
The FaultyTerminal background currently displays with stark "pitch black and white" colors that don't integrate well with the portfolio theme, creating poor visual contrast and readability issues.

## What Changes
- Update FaultyTerminal background colors to provide better visual integration
- Adjust tint, brightness, and scanline intensity for both light and dark themes
- Ensure background colors complement the overall design while maintaining readability
- Add subtle color variations that work across different themes

## Impact
- **Affected specs**: background-effects (modified)
- **Affected code**:
  - `components/background-layer.tsx` - Update FaultyTerminal color parameters
