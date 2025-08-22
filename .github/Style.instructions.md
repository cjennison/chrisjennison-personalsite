---
applyTo: "**/*.{tsx,css,scss}"
---

# Style Patterns

## Modern CSS & Tailwind Standards

### Tailwind CSS Best Practices

- Use Tailwind's utility-first approach consistently
- Implement design system with custom CSS variables
- Use Tailwind's color palette or extend with brand colors
- Leverage spacing scale consistently (4px increments)
- Use responsive design utilities for all breakpoints

### Component Styling Patterns

- Use `cn()` utility for conditional class merging
- Implement compound variants with class-variance-authority (CVA)
- Create reusable component variants
- Use CSS-in-TS for complex dynamic styling
- Avoid inline styles except for dynamic values

### CSS Architecture

- Use CSS Custom Properties for theming
- Implement CSS Container Queries for responsive components
- Use CSS Grid and Flexbox appropriately
- Leverage CSS Logical Properties for internationalization
- Implement proper CSS cascade and specificity

### Design System Integration

- Define consistent spacing, typography, and color scales
- Use semantic color tokens (primary, secondary, accent)
- Implement consistent border radius and shadow systems
- Create reusable animation and transition utilities
- Use consistent icon sizing and styling

### Performance Optimization

- Purge unused CSS in production builds
- Use critical CSS for above-the-fold content
- Optimize font loading with proper font-display values
- Minimize CSS bundle size with tree shaking
- Use CSS containment for performance isolation

### Responsive Design

- Mobile-first approach with min-width breakpoints
- Use Tailwind's responsive prefixes consistently
- Implement proper touch targets (44px minimum)
- Use relative units (rem, em) for scalability
- Test across multiple device sizes and orientations

### Accessibility & Semantics

- Ensure sufficient color contrast ratios (WCAG 2.1 AA)
- Use focus-visible for keyboard navigation
- Implement proper motion reduction preferences
- Use semantic color names and high contrast modes
- Test with screen readers and keyboard navigation

### Animation & Interactions

- Use CSS transforms and opacity for performant animations
- Implement proper easing functions
- Respect reduced motion preferences
- Use CSS animations for state transitions
- Leverage Web Animations API for complex interactions

### Examples

```tsx
// Using class-variance-authority for component variants
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

// CSS custom properties for theming
:root {
  --color-primary: 210 40% 98%;
  --color-primary-foreground: 222.2 84% 4.9%;
  --color-secondary: 210 40% 96%;
  --color-secondary-foreground: 222.2 84% 4.9%;
  --color-muted: 210 40% 96%;
  --color-muted-foreground: 215.4 16.3% 46.9%;
  --color-accent: 210 40% 96%;
  --color-accent-foreground: 222.2 84% 4.9%;
  --color-destructive: 0 84.2% 60.2%;
  --color-destructive-foreground: 210 40% 98%;
  --color-border: 214.3 31.8% 91.4%;
  --color-input: 214.3 31.8% 91.4%;
  --color-ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

// Responsive grid system
.grid-responsive {
  @apply grid gap-4;
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

// Animation utilities
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Container queries for responsive components
.card {
  container-type: inline-size;
}

.card-content {
  @apply p-4;
}

@container (min-width: 300px) {
  .card-content {
    @apply p-6;
  }
}

// Utility function for conditional classes
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
```
