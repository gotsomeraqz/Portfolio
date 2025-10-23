# Background Effects

## MODIFIED Requirements

### REQ-BG-001: FaultyTerminal Background
The FaultyTerminal background MUST display with subtle, theme-appropriate colors that integrate well with the portfolio design and avoid stark black/white contrasts.

#### Scenario: Dark theme background
- **WHEN** the portfolio is in dark theme
- **THEN** the FaultyTerminal background uses muted slate colors
- **AND** the brightness is set to 30% for subtlety
- **AND** scanline intensity is minimal (0.1)
- **AND** the background complements dark theme content

#### Scenario: Light theme background
- **WHEN** the portfolio is in light theme
- **THEN** the FaultyTerminal background uses soft gray colors
- **AND** the brightness is set to 40% for subtlety
- **AND** scanline intensity is minimal (0.08)
- **AND** the background complements light theme content

#### Scenario: Background subtlety
- **WHEN** content is displayed over the FaultyTerminal background
- **THEN** the background is barely perceptible
- **AND** text readability is maintained
- **AND** the background adds visual interest without distraction
- **AND** no stark color contrasts are present
