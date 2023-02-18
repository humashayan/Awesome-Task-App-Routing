import { useContext } from "react";
import { UsersContext } from "./UsersProvider";
import { User } from "./User";
export function AdminPanel() {
  const { users, currentuser } = useContext(UsersContext);

  return (
    <div>
      {users.map((p) =>
        p.username !== currentuser.uname ? (
          <User
            key={p.username}
            username={p.username}
            password={p.password}
            role={p.role}
          />
        ) : null
      )}
    </div>
  );
}
