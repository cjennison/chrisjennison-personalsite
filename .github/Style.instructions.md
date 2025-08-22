---
applyTo: "**/*.{tsx,css,scss}"
---

# Style Patterns

## Modern CSS & Tailwind Standards

### Mantine Component Framework

- **Prefer Mantine components** over hand-written implementations for UI elements
- **Check shared components directory** first for existing Mantine-based components
- **Extend Mantine components** rather than creating from scratch
- **Use Mantine's theming system** alongside Tailwind for consistent styling
- **Leverage Mantine's built-in accessibility** features and ARIA support

### Tailwind CSS Best Practices

- Use Tailwind's utility-first approach consistently
- Implement design system with custom CSS variables
- Use Tailwind's color palette or extend with brand colors
- Leverage spacing scale consistently (4px increments)
- Use responsive design utilities for all breakpoints

### Component Styling Patterns

- **Mantine + Tailwind hybrid**: Use Mantine for complex components, Tailwind for layout and utilities
- Use `cn()` utility for conditional class merging with Mantine
- Implement compound variants with class-variance-authority (CVA) for custom components
- Create reusable component variants by extending Mantine base components
- Use CSS-in-TS for complex dynamic styling when Mantine doesn't provide the pattern
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
// Extending Mantine components with custom styling
import { Button as MantineButton, ButtonProps } from '@mantine/core';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const CustomButton = ({ variant = 'primary', className, ...props }: CustomButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'border-neutral-300 hover:bg-neutral-50 dark:border-neutral-600 dark:hover:bg-neutral-800',
    ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
  };

  return (
    <MantineButton
      className={cn(variantClasses[variant], className)}
      {...props}
    />
  );
};

// Mantine form with Tailwind styling
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)} className="space-y-4">
      <TextInput
        label="Name"
        placeholder="Your name"
        {...form.getInputProps('name')}
        className="w-full"
      />
      <TextInput
        label="Email"
        placeholder="your@email.com"
        {...form.getInputProps('email')}
        className="w-full"
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}

// Using class-variance-authority for custom components only when Mantine doesn't provide the pattern
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const customCardVariants = cva(
  "rounded-lg border shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800",
        elevated: "bg-white border-neutral-200 shadow-md dark:bg-neutral-900 dark:border-neutral-800",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

interface CustomCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof customCardVariants> {}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, variant, padding, ...props }, ref) => {
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
