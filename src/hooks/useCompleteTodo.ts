import axios from "axios";
import { useGetStorageToken } from "./useGetStorageToken";
import { useGetTodos } from "./useGetTodos";

export const useCompleteTodo = () => {
  const CompleteTodo = (token: string, id: number) => {
    const URL = `${process.env.REACT_APP_URL}/completetodo?id=${id}&isComplete=false`;
    axios
      .post(URL, null, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const ReturnTodo = async (token: string, id: number) => {
    const URL = `${process.env.REACT_APP_URL}/completetodo?id=${id}&isComplete=true`;
    await axios
      .post(URL, null, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const DeleteTodo = async (token: string, id: number) => {
    const URL = `${process.env.REACT_APP_URL}/deletetodo?id=${id}`;
    await axios
      .post(URL, null, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return { CompleteTodo, ReturnTodo, DeleteTodo };
};
