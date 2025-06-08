import TodoList from "@/components/TodoList/TodoList";
import { Toaster } from "sonner";

export default async function Page() {
  return (
    <>
      <TodoList />
      <Toaster />
    </>
  );
}
