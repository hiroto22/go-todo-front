import axios from "axios";

export const useCreateTodo = () => {
  const URL = "https://todo-22-app.herokuapp.com/createtodo";

  const CreateTodo = (token: string, todo: any) => {
    const data = { todo: todo };
    console.log(data);

    axios
      .post(URL, JSON.stringify(data), { headers: { Authorization: token } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return CreateTodo;
};
