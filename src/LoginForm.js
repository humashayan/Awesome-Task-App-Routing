import React, { useContext, useState } from "react";
import { UsersContext } from "./UsersProvider";

export function LoginForm() {
  const { Login } = useContext(UsersContext);
  const [userid, setUser] = useState();
  const [password, setpw] = useState();

  const changeuser = (event) => {
    setUser(event.target.value);
  };

  const changepassword = (event) => {
    setpw(event.target.value);
  };

  return (
    <div>
      <input id="uid" onChange={changeuser} type="text" />
      <input id="pw" onChange={changepassword} type="password" />
      <button onClick={() => Login(userid, password)}>Submit</button>
    </div>
  );
}
