import axios from "axios";
import { useNavigate } from "react-router-dom";
console.log(process.env.REACT_APP_URL);

const URL = `${process.env.REACT_APP_URL}/login`;

//loginするためのAPIを呼び出す
export const useLogin = () => {
  const navigate = useNavigate();

  const onClickLogin = async (
    email: string | undefined,
    password: string | undefined
  ) => {
    const data = { email: email, password: password };
    await axios
      .post(URL, JSON.stringify(data))
      .then(async (res) => {
        await sessionStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
        alert(`${err} 
         ログインできませんでした。もう一度お試し下さい。`);
      });

    navigate("/");
  };

  return onClickLogin;
};
