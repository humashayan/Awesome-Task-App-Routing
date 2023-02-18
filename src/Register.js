import { useState, useContext } from "react";
import { UsersContext } from "./UsersProvider";
export function Register({ setreg }) {
  const [userid, setUser] = useState();
  const [password, setpw] = useState();
  const { CreateUser } = useContext(UsersContext);

  const changeuser = (event) => {
    setUser(event.target.value);
  };

  const changepassword = (event) => {
    setpw(event.target.value);
  };
  return (
    <div>
      <h1>Register</h1>
      <input id="uid" onChange={changeuser} type="text" />
      <input id="pw" onChange={changepassword} type="password" />
      <button
        onClick={() => {
          CreateUser(userid, password);
          setreg(false);
        }}
      >
        Submit
      </button>
    </div>
  );
}
