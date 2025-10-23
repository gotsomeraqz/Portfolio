# Theme Management

## ADDED Requirements

### REQ-THEME-001: Theme Selection
The portfolio MUST provide a theme switcher allowing users to choose between light, dark, and system preference modes.

#### Scenario: User selects light theme
- **WHEN** a user clicks the theme switcher and selects light mode
- **THEN** the portfolio immediately switches to light theme
- **AND** the selection is saved to localStorage
- **AND** the light theme persists across page reloads

#### Scenario: User selects dark theme
- **WHEN** a user clicks the theme switcher and selects dark mode
- **THEN** the portfolio immediately switches to dark theme
- **AND** the selection is saved to localStorage
- **AND** the dark theme persists across page reloads

#### Scenario: User selects system theme
- **WHEN** a user clicks the theme switcher and selects system mode
- **THEN** the portfolio matches the operating system theme preference
- **AND** the theme updates automatically when OS preference changes
- **AND** the system preference is saved to localStorage

### REQ-THEME-002: Theme Persistence
Theme preferences MUST persist across browser sessions using localStorage.

#### Scenario: Returning user with saved preference
- **WHEN** a user returns to the portfolio after previously setting a theme
- **THEN** the portfolio loads with their saved theme preference
- **AND** no flash of incorrect theme occurs during load

#### Scenario: First-time user
- **WHEN** a user visits the portfolio for the first time
- **THEN** the portfolio defaults to system theme preference
- **AND** the theme matches their operating system setting

### REQ-THEME-003: Theme Switcher Accessibility
The theme switcher MUST be fully accessible via keyboard and screen readers.

#### Scenario: Keyboard navigation
- **WHEN** a user navigates to the theme switcher with keyboard
- **THEN** the switcher is reachable via Tab key
- **AND** theme options can be selected with Enter or Space
- **AND** focus indicators are clearly visible
- **AND** the current theme is indicated visually

#### Scenario: Screen reader usage
- **WHEN** a user encounters the theme switcher with a screen reader
- **THEN** the switcher is announced with its purpose
- **AND** each theme option is clearly labeled
- **AND** the current selection is announced
- **AND** theme changes are announced when they occur
