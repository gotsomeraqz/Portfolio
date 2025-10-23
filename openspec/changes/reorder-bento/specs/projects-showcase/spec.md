# Projects Showcase

## MODIFIED Requirements

### REQ-PROJECTS-001: Project Item Display
The projects section MUST display a collection of technical projects using a bento grid layout, each showing title, description, tech stack, project image, and relevant links.

#### Scenario: User browses projects in bento grid
- **WHEN** a user scrolls to the projects section and it becomes visible
- **THEN** projects are displayed in a bento grid layout with varying item sizes
- **AND** each project shows a representative image or screenshot
- **AND** each project displays title and description
- **AND** tech stack is shown using badge/tag components
- **AND** links to live demo and/or repository are clearly visible

#### Scenario: Bento grid responsiveness
- **WHEN** the viewport size changes
- **THEN** the bento grid adapts item sizes and layout
- **AND** content remains readable and accessible
- **AND** the grid maintains visual hierarchy
