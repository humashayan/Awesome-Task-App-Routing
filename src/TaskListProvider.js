import { useState, createContext } from "react";
import { nanoid } from "nanoid";
import { useLocalStorage } from "./useLocalStorage";
export const Taskcontext = createContext();
export function TaskListProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  useLocalStorage(tasks, setTasks);
  function addTask() {
    setTasks([...tasks, { id: nanoid(), name: "", isDone: false }]);
  }
  const toggleDone = (id) => {
    setTasks(tasks.map((p) => (p.id === id ? { ...p, isDone: !p.isDone } : p)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((a) => a.id !== id));
  };
  const updateName = (id, name) => {
    setTasks(tasks.map((p) => (p.id === id ? { ...p, name: name } : p)));
  };

  return (
    <Taskcontext.Provider
      value={{
        tasks,
        toggleDone,
        updateName,
        deleteTask,
        addTask
      }}
    >
      {children}
    </Taskcontext.Provider>
  );
}
