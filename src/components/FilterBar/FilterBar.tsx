import { Button } from "@/components/ui/button";
import { FilterType } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

const filters = [
  { type: FilterType.ALL, label: "All" },
  { type: FilterType.COMPLETED, label: "Completed" },
  { type: FilterType.UNCOMPLETED, label: "Uncompleted" },
];

export function FilterBar({
  currentFilter = FilterType.ALL,
  onFilterChange,
}: {
  currentFilter?: FilterType;
  onFilterChange: Dispatch<SetStateAction<FilterType>>;
}) {
  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <Button
          key={filter.type}
          variant={currentFilter === filter.type ? "default" : "outline"}
          onClick={() => onFilterChange(filter.type)}
          data-active={currentFilter === filter.type ? "true" : "false"}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
