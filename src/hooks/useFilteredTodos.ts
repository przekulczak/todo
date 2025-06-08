import { useMemo, useState } from "react";
import { FilterType } from "@/types/todo";
import { TodoItem } from "@/types/todo";

export function useFilteredTodos(data: TodoItem[] | undefined) {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

  const filteredData = useMemo(() => {
    return data?.filter((item: TodoItem) => {
      if (filter === FilterType.ALL) return true;
      if (filter === FilterType.COMPLETED) return item.completed;
      if (filter === FilterType.UNCOMPLETED) return !item.completed;
      return true;
    });
  }, [data, filter]);

  return {
    filter,
    setFilter,
    filteredData,
  };
}
