import axios from "axios";

export const useEditTodo = () => {
  const editTodo = async (token: string, id: number, todo: any) => {
    const URL = `https://todo-22-app.herokuapp.com/edittodo?id=${id}`;
    const data = { todo: todo };
    await axios
      .post(URL, JSON.stringify(data), { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return editTodo;
};
