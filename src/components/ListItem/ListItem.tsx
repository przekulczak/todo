"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { buildUrl, Paths } from "@/data/urls";
import { TodoItem } from "@/types/todo";
import { memo, useState } from "react";
import { toast } from "sonner";

function ListItem({ item }: { item: TodoItem }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const handleChange = () => {
    setIsChecked((checked) => !checked);
    fetch(buildUrl({ path: Paths.TODOS, params: String(item.id) }), {
      method: "PUT",
      body: JSON.stringify({
        id: item.id,
        title: item.title,
        completed: isChecked,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        response.ok
          ? toast.success("Todo updated")
          : (setIsChecked((checked) => !checked),
            toast.error("Failed to update todo"));
      })
      .catch(() => {
        setIsChecked((checked) => !checked);
        toast.error("Failed to update todo");
      });
  };

  return (
    <div className="flex items-center gap-3 mb-5" key={item.id}>
      <Checkbox
        id={String(item.id)}
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      <Label htmlFor={String(item.id)}>{item.title}</Label>
    </div>
  );
}

export default memo(ListItem);
