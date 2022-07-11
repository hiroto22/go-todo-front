import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DoneTodoState, TodoState } from "../state/todoState";

export const useGetTodos = (token: string) => {
  const URL = `${process.env.REACT_APP_URL}/getusertodoList`;
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [doneTodos, setDoneTodos] = useState<Todo[]>([]);
  const [todos, setTodos] = useRecoilState(TodoState);
  const [doneTodos, setDoneTodos] = useRecoilState(DoneTodoState);

  useEffect(() => {
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
  }, [todos, doneTodos]);

  return { todos, doneTodos };
};
