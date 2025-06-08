export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export enum FilterType {
  ALL = "all",
  COMPLETED = "completed",
  UNCOMPLETED = "uncompleted",
}
