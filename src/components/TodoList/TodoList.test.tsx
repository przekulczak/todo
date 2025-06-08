import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { TodoList } from "./TodoList";

vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => {
      if (key === "page") return "1";
      return null;
    },
  }),
}));

describe("TodoList", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("renders todo items after loading", async () => {
    render(<TodoList />);

    // Wait for initial data to load
    await screen.findByRole("checkbox", { name: /delectus aut autem/i });
  });

  it("renders filter bar and pagination", async () => {
    render(<TodoList />);

    // Wait for initial data to load
    await screen.findByRole("checkbox", { name: /delectus aut autem/i });

    // Check filter buttons
    expect(screen.getByText("All")).toBeDefined();
    expect(screen.getByText("Completed")).toBeDefined();
    expect(screen.getByText("Uncompleted")).toBeDefined();

    // Check pagination
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
  });
});
