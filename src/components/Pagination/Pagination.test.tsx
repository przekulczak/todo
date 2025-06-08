import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, vi, afterEach } from "vitest";
import { Pagination } from "./Pagination";

vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: (key: string) => "1",
  }),
}));

describe("Pagination", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders pagination with correct number of pages", () => {
    render(<Pagination totalPages={5} />);
    const pageLinks = screen.getAllByRole("link", { name: /^[2-3]$/ });
    expect(pageLinks).toHaveLength(2);
  });

  it("does not render when totalPages is less than 2", () => {
    const { container } = render(<Pagination totalPages={1} />);
    expect(container.firstChild).toBeNull();
  });

  it("shows correct active page", () => {
    render(<Pagination totalPages={5} />);
    const activeLinks = screen.getAllByRole("link", { name: "1" });
    const activeLink = activeLinks[0]; // Get the first one
    expect(activeLink.className).toContain("bg-primary");
  });

  it("renders navigation buttons", () => {
    render(<Pagination totalPages={5} />);
    const prevLinks = screen.getAllByRole("link", { name: "Previous" });
    const nextLinks = screen.getAllByRole("link", { name: "Next" });
    const prevLink = prevLinks[0]; // Get the first one
    const nextLink = nextLinks[0]; // Get the first one
    expect(prevLink.hasAttribute("disabled")).toBe(true);
    expect(nextLink.hasAttribute("disabled")).toBe(false);
  });
});
