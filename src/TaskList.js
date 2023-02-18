import { Task } from "./Task.js";
import { UsersContext } from "./UsersProvider";
import { Taskcontext } from "./TaskListProvider";
import { useContext } from "react";
export function TaskList() {
  const { tasks, addTask } = useContext(Taskcontext);
  const {
    Logout,
    currentuser: { uname }
  } = useContext(UsersContext);

  const list = tasks.map((task) => {
    return <Task key={task.id} id={task.id} />;
  });

  return (
    <div>
      {list}
      <button onClick={addTask}>+</button>

      <button onClick={Logout}>Logout {uname}</button>
    </div>
  );
}
