type InputAreaState = {
  type: string;
  text: string;
  onChange: any;
};

//email,passwordなど情報を入力する欄　placeholderを指定できる
export const InputArea = (props: InputAreaState) => {
  return (
    <div>
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.text}
      ></input>
    </div>
  );
};
