import { ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useCompleteTodo } from "../../hooks/useCompleteTodo";
import { useEditTodo } from "../../hooks/useEditTodo";
import { editTodoState } from "../../state/editTodoState";
import { BaseButton } from "../atoms/baseButton";
import { TextArea } from "../atoms/textArea";

//todo編集画面
export const EditTodo = () => {
  const token = "Bearer " + sessionStorage.getItem("token");

  const [todo, setTodo] = useRecoilState(editTodoState);
  const editTodo = useEditTodo();

  const onChangeTodo: ChangeEventHandler<HTMLTextAreaElement> = (e: any) => {
    editTodo(token, todo.id, e.target.value);
  };

  const { CompleteTodo, ReturnTodo, DeleteTodo } = useCompleteTodo();
  const navigate = useNavigate();

  //todoが完了か未完了かで表示するボタンを変える
  return (
    <div>
      <TextArea onChange={onChangeTodo} defaultValue={todo.todo}></TextArea>
      {todo.isComplete ? (
        <div>
          <BaseButton
            text="タスクに戻す"
            onClick={async () => {
              await ReturnTodo(token, todo.id);
              navigate("/");
            }}
          />
          <BaseButton
            text="削除"
            onClick={async () => {
              await DeleteTodo(token, todo.id);
              navigate("/");
            }}
          />
        </div>
      ) : (
        <div>
          <BaseButton
            text="タスク完了"
            onClick={async () => {
              await CompleteTodo(token, todo.id);
              navigate("/");
            }}
          />
          <BaseButton
            text="削除"
            onClick={async () => {
              await DeleteTodo(token, todo.id);
              navigate("/");
            }}
          />
        </div>
      )}
    </div>
  );
};
