import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { DoneTodoState, TodoState } from "../state/todoState";

//todoの一覧を取得するAPIを呼ぶ
export const useGetTodos = (token: string) => {
  const URL = `${process.env.REACT_APP_URL}/getusertodoList`;
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
  }, [token]);

  return { todos, doneTodos };
};
