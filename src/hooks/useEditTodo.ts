import axios from "axios";

//todoの内容を変更する
export const useEditTodo = () => {
  const editTodo = async (token: string, id: number, todo: any) => {
    const URL = `${process.env.REACT_APP_URL}/edittodo?id=${id}`;
    const data = { todo: todo };
    await axios
      .post(URL, JSON.stringify(data), { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return editTodo;
};
