import "./styles.css";
import React, { useContext } from "react";
import { Taskcontext } from "./TaskListProvider";
export function Task(attr) {
  // const [taskname, setName] = useState(props.taskname);
  // const [done, setDone] = useState();
  const { updateName, toggleDone, tasks, deleteTask } = useContext(Taskcontext);
  const handleChange = (event) => {
    updateName(attr.id, event.target.value);
  };
  const handleKeypress = (event) => {
    if (event.key === "Enter") {
      event.target.blur();
    }
  };

  const task = tasks.find((p) => p.id === attr.id);
  return (
    <div id={attr.id} className="task">
      <input
        type="checkbox"
        onChange={() => toggleDone(task.id)}
        checked={task.isDone}
      />
      <input
        autoFocus
        type="text"
        onKeyDown={handleKeypress}
        onChange={handleChange}
        className={task.isDone ? "done" : "notdone"}
        value={task.name}
        focus="true"
      />
      <button onClick={() => deleteTask(attr.id)}>x</button>
    </div>
  );
}
