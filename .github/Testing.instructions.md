---
applyTo: "**/*.{test,spec}.{ts,tsx,js,jsx}"
---

# Testing Patterns

## Modern Testing Standards

### Testing Philosophy

- Follow the Testing Trophy approach (more integration tests than unit tests)
- Write tests that resemble how users interact with your application
- Focus on testing behavior, not implementation details
- Maintain high test coverage for critical business logic
- Use Test-Driven Development (TDD) for complex features

### Testing Framework Stack

- **Unit/Integration**: Vitest for fast, modern testing
- **Component Testing**: React Testing Library with Vitest
- **E2E Testing**: Playwright for cross-browser testing
- **Visual Regression**: Chromatic or Percy for UI consistency
- **Performance Testing**: Lighthouse CI for Core Web Vitals

### Component Testing Best Practices

- Test components in isolation and integration
- Use semantic queries (getByRole, getByLabelText) over test IDs
- Test user interactions, not component methods
- Mock external dependencies and APIs
- Use custom render functions for providers and context

### API Testing

- Test API routes with proper request/response validation
- Use MSW (Mock Service Worker) for API mocking
- Test error handling and edge cases
- Validate TypeScript types in API responses
- Test authentication and authorization flows

### Testing Utilities

- Create custom testing utilities and helpers
- Use factory functions for test data generation
- Implement proper cleanup and teardown
- Use beforeEach/afterEach hooks appropriately
- Share common test setup across test files

### Performance Testing

- Test Core Web Vitals metrics
- Monitor bundle size changes
- Test loading states and data fetching
- Validate accessibility in automated tests
- Test responsive behavior across viewports

### Examples

```tsx
// Component testing with React Testing Library
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { UserProfile } from "@/components/UserProfile";
import { createMockUser } from "@/test/factories";

describe("UserProfile", () => {
  it("displays user information correctly", () => {
    const user = createMockUser();
    render(<UserProfile user={user} />);

    expect(
      screen.getByRole("heading", { name: user.name })
    ).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });

  it("handles follow action", async () => {
    const user = createMockUser();
    const onFollow = vi.fn();

    render(<UserProfile user={user} onFollow={onFollow} />);

    const followButton = screen.getByRole("button", { name: /follow/i });
    fireEvent.click(followButton);

    await waitFor(() => {
      expect(onFollow).toHaveBeenCalledWith(user.id);
    });
  });
});

// API route testing
import { createMocks } from "node-mocks-http";
import { GET } from "@/app/api/users/[id]/route";
import { createMockUser } from "@/test/factories";

describe("/api/users/[id]", () => {
  it("returns user data for valid ID", async () => {
    const user = createMockUser();
    const { req } = createMocks({
      method: "GET",
      url: `/api/users/${user.id}`,
    });

    const response = await GET(req, { params: { id: user.id } });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toMatchObject({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  it("returns 404 for non-existent user", async () => {
    const { req } = createMocks({
      method: "GET",
      url: "/api/users/non-existent",
    });

    const response = await GET(req, { params: { id: "non-existent" } });

    expect(response.status).toBe(404);
  });
});

// Custom testing utilities
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

// Test factories
export const createMockUser = (overrides = {}) => ({
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://example.com/avatar.jpg",
  createdAt: new Date().toISOString(),
  ...overrides,
});

// E2E testing with Playwright
import { test, expect } from "@playwright/test";

test.describe("User Authentication", () => {
  test("user can sign in and access dashboard", async ({ page }) => {
    await page.goto("/login");

    await page.fill('[data-testid="email"]', "user@example.com");
    await page.fill('[data-testid="password"]', "password");
    await page.click('[data-testid="submit"]');

    await expect(page).toHaveURL("/dashboard");
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
  });

  test("shows error for invalid credentials", async ({ page }) => {
    await page.goto("/login");

    await page.fill('[data-testid="email"]', "invalid@example.com");
    await page.fill('[data-testid="password"]', "wrong");
    await page.click('[data-testid="submit"]');

    await expect(page.locator('[role="alert"]')).toContainText(
      "Invalid credentials"
    );
  });
});

// MSW setup for API mocking
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { createMockUser } from "./factories";

export const handlers = [
  http.get("/api/users/:id", ({ params }) => {
    const { id } = params;

    if (id === "not-found") {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(createMockUser({ id }));
  }),

  http.post("/api/users/:id/follow", () => {
    return HttpResponse.json({ success: true });
  }),
];

export const server = setupServer(...handlers);
```

### Test Configuration

```js
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```
