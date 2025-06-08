export interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export enum FilterType {
  ALL = "all",
  COMPLETED = "completed",
  UNCOMPLETED = "uncompleted",
}
