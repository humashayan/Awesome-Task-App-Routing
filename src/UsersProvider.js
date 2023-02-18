import "./styles.css";
import { createContext, useState } from "react";

export const UsersContext = createContext();
export default function UsersProvider({ children }) {
  const [loggedin, SetLogin] = useState(false);
  const [currentuser, setCurrentUser] = useState();
  const [users, setUsers] = useState([]);

  if (users.length === 0) {
    console.log("loading users from storage");
    const u = localStorage.getItem("availableusers");

    if (u) {
      setUsers(JSON.parse(u));
    }
  } else {
    console.log("saving", users);
    localStorage.setItem("availableusers", JSON.stringify(users));
  }

  const Logout = () => {
    setCurrentUser(undefined);
    SetLogin(false);
  };
  const updateRole = (username, value) => {
    setUsers(
      users.map((p) => (p.username === username ? { ...p, role: value } : p))
    );
  };
  const Login = (username, pword) => {
    const user = users.find(
      (p) => p.username === username && p.password === pword
    );
    if (user) {
      SetLogin(true);
      setCurrentUser({
        uname: user.username,
        role: user.role,
        TaskList: []
      });
    }
  };

  const updatePassword = (username, pw) => {
    setUsers(
      users.map((p) => (p.username === username ? { ...p, password: pw } : p))
    );
  };

  function CreateUser(Userid, password) {
    const u = users.find((p) => p.username === Userid);
    if (!u) {
      setUsers([
        ...users,
        { username: Userid, password: password, role: "nonadmin" }
      ]);
    } else {
      alert("username exists already");
    }
  }

  return (
    <UsersContext.Provider
      value={{
        CreateUser,
        users,
        setUsers,
        loggedin,
        currentuser,
        setCurrentUser,
        updateRole,
        updatePassword,
        Login,
        Logout
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
