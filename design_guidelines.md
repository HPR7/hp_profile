# Design Guidelines: Héctor Párraga SH&E Portfolio

## Design Approach
**System-Based with Premium Touches**: Drawing from Linear's typography precision, Stripe's professional restraint, and modern agency polish. Emphasis on credibility through clean hierarchy and strategic use of the green accent color.

## Typography System
- **Headings**: Inter or DM Sans, weights 600-700
- **Body**: Inter or System UI, weight 400-500  
- **Hierarchy**: h1 (48-56px), h2 (36-40px), h3 (24-28px), body (16-18px)
- **Line height**: 1.6 for body, 1.2 for headings

## Layout & Spacing
**Core Units**: Tailwind's 4, 6, 8, 12, 16, 24 for consistent rhythm
- Section padding: py-20 lg:py-32
- Container: max-w-7xl with px-6
- Card spacing: gap-6 lg:gap-8
- Generous whitespace between sections (24-32 units)

## Component Library

### Hero Section
- **Layout**: Two-column split (40/60) - text left, professional headshot right
- **Image**: High-quality professional portrait, subtle green gradient overlay (10% opacity)
- **Content**: Name as h1, title/tagline, short value proposition (2 lines max), dual CTAs (primary + secondary)
- **Height**: 85vh minimum, content vertically centered
- **Background**: Subtle geometric pattern or gradient wash in very light green tint

### Core Expertise Cards (Primary Interactive Feature)
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Card States**:
  - Default: 280px height, white background, subtle shadow, green accent bar on left (4px)
  - Hover: Lift with increased shadow, green accent bar expands to full card background at 5% opacity
  - Expanded: Height auto-animates, reveals 3-4 bullet points with fade-in
- **Animation**: 300ms ease-out transitions, stagger delay of 50ms between cards
- **Typography**: Card title (20px bold), icon at top (32px), expanded content (16px regular)
- **Icons**: Use Heroicons outline style in green

### Professional Experience Timeline
- **Layout**: Vertical timeline with alternating content (left/right)
- **Visual**: Green vertical line (2px), circular nodes (16px) at each entry
- **Cards**: Frosted glass effect (white with 80% opacity, backdrop blur)
- **Content**: Company/role, dates, 3-4 key achievements per entry

### Certifications Grid
- **Layout**: 4 columns desktop, 2 mobile, equal height cards
- **Style**: Minimal cards with certification logo/icon, title, issuing body, date
- **Accent**: Green border-top (2px) on hover

### Contact/CTA Section
- **Layout**: Centered, max-width 600px
- **Content**: Strong headline, brief text, email + LinkedIn buttons side-by-side
- **Background**: Light green wash (3% opacity) with subtle pattern

### Navigation
- **Type**: Fixed header with blur backdrop
- **Layout**: Logo left, nav items center, CTA button right
- **Behavior**: 80px height, shrinks to 64px on scroll, shadow appears on scroll
- **Items**: About, Expertise, Experience, Certifications, Contact

### Footer
- Minimal single row: Copyright, social links (LinkedIn, email), back-to-top button

## Animations & Interactions
- **Page Load**: Stagger-fade content from top (100ms delays)
- **Scroll**: Subtle parallax on hero image (0.3 speed)
- **Cards**: Transform scale(1.02) on hover with shadow increase
- **Expertise Expansion**: Height auto with overflow hidden, content opacity 0→1
- **Micro-interactions**: Button press scale(0.98), link underline slide-in

## Images Required
1. **Hero**: Professional headshot in business attire, well-lit, neutral background (suggest office or industrial safety setting), aspect ratio 3:4, position right 60% of hero
2. **Section Dividers**: Abstract safety/industrial imagery as background accents (low opacity, 5-10%) - hard hats, construction, environmental scenes
3. **Certification Logos**: Official logos for each certification displayed

## Responsive Behavior
- **Desktop (1024px+)**: Full multi-column layouts, larger imagery
- **Tablet (768-1023px)**: 2-column grids, reduce spacing by 25%
- **Mobile (<768px)**: Single column, stack all content, reduce font sizes 15%, maintain card functionality

## Key Design Principles
1. **Professionalism First**: Clean, uncluttered, authoritative
2. **Strategic Color**: Green used sparingly for accents, CTAs, and highlights only
3. **White Space**: Generous breathing room establishes premium feel
4. **Subtle Motion**: Animations enhance but never distract
5. **Scannable Content**: Clear hierarchy enables quick information gathering