import { Card, CardActionArea, CardContent } from "@mui/material";

type TodoCardProps = {
  todo: string;
  onClickCard: any;
};

//todoが個別に表示される横長のカード
export const TodoCard = (props: TodoCardProps) => {
  return (
    <Card sx={{ margin: "8px", display: "flex", alignItems: "center" }}>
      <CardActionArea onClick={props.onClickCard}>
        <CardContent>{props.todo}</CardContent>
      </CardActionArea>
    </Card>
  );
};
