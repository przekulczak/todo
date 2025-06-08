# Todo App

The application has added pagination, filters work per page and are reset when changing pages. When a user marks a task as completed or uncompleted, they see the state change automatically. After changing the state, a request is made to the backend, and if an error occurs, the state is reset and the user sees an error message. Other errors are handled in the standard Next.js way. In addition to unit tests, I've also added E2E tests, the way to run them is below.

Happy testing!

## Installation

```bash
# Install dependencies
pnpm install

# Install Playwright browsers
pnpm exec playwright install
```

## Running

```bash
# Development mode
pnpm dev

# Production build
pnpm build
pnpm start
```

## Testing

### Unit Tests (Vitest)

```bash
# Run all unit tests
pnpm test
```

### E2E Tests (Playwright)

```bash
# Run all E2E tests
pnpm test:e2e
```
