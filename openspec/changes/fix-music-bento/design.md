# Design: Fix Music Bento Grid Layout

## Architecture Overview
Fix the music section bento grid implementation to ensure proper content display and layout within the grid items.

## Implementation Details

### Current Issue
- MusicCard is placed in the header of BentoGridItem
- Empty title/description to avoid duplication
- Layout may not be filling the grid item properly

### Proposed Solution
- Ensure MusicCard takes full height of bento grid item
- Remove any unnecessary wrapper elements
- Adjust MusicCard styling for bento grid context
- Maintain responsive behavior

### BentoGridItem Structure for Music
```tsx
<BentoGridItem
  title="" // Empty to avoid duplication
  description="" // Empty to avoid duplication
  header={<MusicCard music={item} />} // Full card content
  className="md:col-span-2" // or md:col-span-1
  icon={<Icon />}
/>
```

### MusicCard Adjustments
- Remove any fixed heights that conflict with bento grid
- Ensure flex layout works within bento grid constraints
- Maintain proper spacing and responsive behavior

## Layout Considerations

### Grid Item Sizing
- First music item: `md:col-span-2` (full width)
- Other items: `md:col-span-1` (half width)
- Auto-rows: `md:auto-rows-[20rem]` for consistent height

### Content Flow
- Image at top (fixed aspect ratio)
- Title and description below
- Streaming buttons at bottom
- Proper spacing between elements

## Responsive Behavior
- Mobile: Single column stack
- Tablet/Desktop: Multi-column grid
- Content scales appropriately
- Touch targets remain accessible
