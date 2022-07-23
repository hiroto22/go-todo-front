import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useGetTodos } from "../../hooks/useGetTodos";
import { editTodoState } from "../../state/editTodoState";
import { TodoCard } from "../molecules/todoCard";

export const Todos = () => {
  const [todo, setTodo] = useRecoilState(editTodoState);

  const [tabValue, setTabValue] = useState("1"); //画面上で完了と未完了を切り替える 1:未完了　2:完了
  const navigate = useNavigate();
  const token = "Bearer " + sessionStorage.getItem("token");
  const { todos, doneTodos } = useGetTodos(token);

  //todoのリストを取得してmapでそれぞれ表示 クリックすると /edit-todoへ移動
  return (
    <div>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <Grid container spacing={2} wrap="nowrap">
          <Grid item xs={300} sm={1000}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={(event: React.SyntheticEvent, newValue: string) =>
                    setTabValue(newValue)
                  }
                  aria-label="lab API tabs example"
                >
                  <Tab label="タスク" value="1" />
                  <Tab label="完了したタスク" value="2" />
                </TabList>
              </Box>

              {/* 未完了 */}
              <TabPanel value="1">
                {todos ? (
                  todos.map((res) => (
                    <div key={res.id}>
                      <TodoCard
                        todo={res.todo}
                        onClickCard={async () => {
                          await setTodo({
                            id: res.id,
                            todo: res.todo,
                            isComplete: false,
                          });
                          navigate("/edit-todo");
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div>
                    <p>タスクはありません</p>
                  </div>
                )}
              </TabPanel>

              {/* 完了 */}
              <TabPanel value="2">
                {doneTodos ? (
                  doneTodos.map((res) => (
                    <div key={res.id}>
                      <TodoCard
                        todo={res.todo}
                        onClickCard={async () => {
                          await setTodo({
                            id: res.id,
                            todo: res.todo,
                            isComplete: true,
                          });
                          navigate("/edit-todo");
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div>完了したタスクはありません</div>
                )}
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
