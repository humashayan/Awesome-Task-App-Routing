import { useContext, useState } from "react";
import { AdminPanel } from "./AdminPanel";
import { TaskList } from "./TaskList";
import { TaskListProvider } from "./TaskListProvider";
import { UsersContext } from "./UsersProvider";
export function UserHome() {
  const [adminScreen, setAdminScreen] = useState(false);
  const {
    currentuser: { role }
  } = useContext(UsersContext);
  const admin = role === "admin" ? true : false;

  return (
    <div>
      {!adminScreen ? (
        <div>
          <div className="TaskList">
            <TaskListProvider>
              <TaskList />
            </TaskListProvider>
            {admin ? (
              <button onClick={() => setAdminScreen(true)}>Admin Panel</button>
            ) : (
              <br />
            )}
          </div>
        </div>
      ) : (
        <div>
          <AdminPanel />
          <button onClick={() => setAdminScreen(false)}>back</button>
        </div>
      )}
    </div>
  );
}
