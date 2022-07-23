import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { BaseButton } from "../atoms/baseButton";
import { TextArea } from "../atoms/textArea";

//todo追加画面
export const AddTodo = () => {
  const [text, setText] = useState("");
  const CreateTodo = useCreateTodo();
  const token = "Bearer " + sessionStorage.getItem("token");
  const navigate = useNavigate();

  //apiを呼び出しhomeへ戻る
  const onClickCreate = async () => {
    await CreateTodo(token, text);
    navigate("/");
  };

  return (
    <div>
      <TextArea
        onChange={(e: any) => setText(e.target.value)}
        defaultValue=""
      />

      <BaseButton text="タスクを追加" onClick={onClickCreate} />
    </div>
  );
};
