import axios from "axios";

//todoの状態を変更させる
export const useCompleteTodo = () => {
  //todoを完了にする
  const CompleteTodo = async (token: string, id: number) => {
    const URL = `${process.env.REACT_APP_URL}/completetodo?id=${id}&isComplete=false`;
    await axios
      .post(URL, null, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //todoを未完了にもどす
  const ReturnTodo = async (token: string, id: number) => {
    const URL = `${process.env.REACT_APP_URL}/completetodo?id=${id}&isComplete=true`;
    await axios
      .post(URL, null, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //todoを削除
  const DeleteTodo = async (token: string, id: number) => {
    const URL = `${process.env.REACT_APP_URL}/deletetodo?id=${id}`;
    await axios
      .post(URL, null, { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return { CompleteTodo, ReturnTodo, DeleteTodo };
};
