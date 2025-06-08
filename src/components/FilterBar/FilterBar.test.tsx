import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { FilterType } from "@/types/types";
import { useState } from "react";

describe("FilterBar", () => {
  it("renders all filter buttons", () => {
    const onFilterChange = vi.fn();
    const { container } = render(<FilterBar onFilterChange={onFilterChange} />);

    const filterBar = container.firstChild as HTMLElement;
    const buttons = filterBar.querySelectorAll('button[data-slot="button"]');
    expect(buttons[0].textContent).toBe("All");
    expect(buttons[1].textContent).toBe("Completed");
    expect(buttons[2].textContent).toBe("Uncompleted");
  });

  it("shows correct active filter", () => {
    const onFilterChange = vi.fn();
    const { container } = render(
      <FilterBar
        currentFilter={FilterType.COMPLETED}
        onFilterChange={onFilterChange}
      />
    );

    const filterBar = container.firstChild as HTMLElement;
    const buttons = filterBar.querySelectorAll('button[data-slot="button"]');
    expect(buttons[1].className).toContain("bg-primary");
  });

  it("calls onFilterChange when filter button is clicked", () => {
    function TestComponent() {
      const [filter, setFilter] = useState(FilterType.ALL);
      return <FilterBar currentFilter={filter} onFilterChange={setFilter} />;
    }

    const { container } = render(<TestComponent />);
    const filterBar = container.firstChild as HTMLElement;
    const buttons = filterBar.querySelectorAll('button[data-slot="button"]');
    fireEvent.click(buttons[1]);

    expect(buttons[1].getAttribute("data-active")).toBe("true");
  });
});
