import "./styles.css";
import { useContext } from "react";

import { LoginRegister } from "./LoginRegister";
import { UserHome } from "./UserHome";
import { UsersContext } from "./UsersProvider";

export default function App() {
  const { loggedin } = useContext(UsersContext);
  return (
    <>
      <h1>sign in</h1>
      {loggedin ? <UserHome /> : <LoginRegister />}
    </>
  );
}
