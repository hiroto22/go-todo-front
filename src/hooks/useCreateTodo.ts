import axios from "axios";

export const useCreateTodo = () => {
  const URL = `${process.env.REACT_APP_URL}/createtodo`;

  const CreateTodo = async (token: string, todo: any) => {
    const data = { todo: todo };
    console.log(data);

    await axios
      .post(URL, JSON.stringify(data), { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return CreateTodo;
};
