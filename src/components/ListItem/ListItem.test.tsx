import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ListItem from "./ListItem";
import { server } from "@/test/setup";
import { http, HttpResponse } from "msw";

describe("ListItem", () => {
  const mockItem = {
    id: 1,
    title: "Test todo",
    completed: false,
  };

  it("renders todo item with correct title", () => {
    render(<ListItem item={mockItem} />);
    expect(screen.getByText("Test todo")).toBeDefined();
  });

  it("renders checkbox with correct initial state", () => {
    render(<ListItem item={mockItem} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.getAttribute("aria-checked")).toBe("false");
  });

  it("updates checkbox state on change", async () => {
    render(<ListItem item={mockItem} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(checkbox.getAttribute("aria-checked")).toBe("true");
    });
  });

  it("reverts checkbox state on API failure", async () => {
    server.use(
      http.put("*/todos/:id", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<ListItem item={mockItem} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(checkbox.getAttribute("aria-checked")).toBe("false");
    });
  });
});
