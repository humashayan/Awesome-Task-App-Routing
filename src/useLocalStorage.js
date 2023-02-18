import { useEffect, useContext, useRef } from "react";
import { UsersContext } from "./UsersProvider";
export function useLocalStorage(tasks, setTasks) {
  const {
    currentuser: { uname }
  } = useContext(UsersContext);
  const latesttasks = useRef(tasks);
  latesttasks.current = tasks;
  useEffect(() => {
    const alltasks = JSON.parse(localStorage.getItem(uname));
    if (alltasks) {
      setTasks(alltasks);
    }
    return () => {
      localStorage.setItem(uname, JSON.stringify(latesttasks.current));
    };
  }, [uname, setTasks]);
}
