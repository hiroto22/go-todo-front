import { Header } from "../components/organisms/header";
import { Todos } from "../components/organisms/todos";
import { AddIcon } from "../components/atoms/addIcon";
import { Navigate, useNavigate } from "react-router-dom";

export const TopPage = () => {
  const navigate = useNavigate();
  const token = "Bearer " + sessionStorage.getItem("token");
  return (
    <div>
      {token !== "Bearer null" ? (
        <div>
          <Header />
          {/* <Todos /> */}
          <AddIcon onClick={() => navigate("/addtodo")} />
        </div>
      ) : (
        <Navigate to="login" />
      )}
    </div>
  );
};
