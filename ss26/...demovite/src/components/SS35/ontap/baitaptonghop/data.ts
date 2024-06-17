export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const data: Todo[] = [
  { id: 1, title: "đi học", isCompleted: true },
  { id: 2, title: "đi ngủ", isCompleted: false },
  { id: 3, title: "đi chơi", isCompleted: false },
];
