import { atom } from "recoil";

export type Todo = {
  id: number;
  userid: any;
  todo: string;
  createdat: Date;
  updatedat: Date;
  isDone: boolean;
};

export const TodoState = atom<Todo[]>({
  key: "todoList",
  default: [],
});

export const DoneTodoState = atom<Todo[]>({
  key: "doneTodoList",
  default: [],
});
