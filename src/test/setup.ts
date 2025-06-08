import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { cleanup } from "@testing-library/react";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
