import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  userid: any;
  todo: string;
  createdat: Date;
  updatedat: Date;
  isDone: boolean;
};

export const useGetTodos = (token: string) => {
  const URL = `https://todo-22-app.herokuapp.com/get-usertodoList`;
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTodos, setDoneTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log("postしました");
    axios
      .get(URL, { params: { isdone: 0 }, headers: { Authorization: token } })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(URL, {
        params: { isdone: 1 },
        headers: { Authorization: token },
      })
      .then((res) => {
        setDoneTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return { todos, doneTodos };
};
