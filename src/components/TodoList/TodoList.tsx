"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import { useFilteredTodos } from "@/hooks/useFilteredTodos";
import { TodoItem } from "@/types/todo";
import useSWR from "swr";
import fetcher from "@/data/fetcher";
import ListItem from "../ListItem/ListItem";
import { FilterBar } from "../FilterBar/FilterBar";
import { Pagination } from "../Pagination/Pagination";
import { memo, useEffect } from "react";
import { buildUrl, Paths } from "@/data/urls";

export function TodoList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const url = buildUrl({ path: Paths.TODOS, page: Number(page) || 1 });
  const { data, isLoading } = useSWR<TodoItem[]>(url, fetcher);

  const { filter, setFilter, filteredData } = useFilteredTodos(data);

  useEffect(() => {
    if (!isLoading && !data?.length) {
      router.push("/?page=1");
    }
  }, [data, isLoading, router]);

  return (
    <div className="space-y-4">
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <Pagination />
      <div className="space-y-2">
        {isLoading ? (
          <Skeleton className="h-16 w-full" />
        ) : (
          filteredData?.map((item) => <ListItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}

export default memo(TodoList);
