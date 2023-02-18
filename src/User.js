import { useContext, useState } from "react";
import { UsersContext } from "./UsersProvider";

export function User({ username, role }) {
  const { updateRole, updatePassword } = useContext(UsersContext);
  const [pw, setPW] = useState();
  const [showreset, setShowReset] = useState(false);

  const Passwordtype = (e) => setPW(e.target.value);

  return (
    <div>
      <span>{username}</span>
      <select
        value={role}
        onChange={(e) => updateRole(username, e.target.value)}
      >
        <option value="nonadmin">Non Admin</option>
        <option value="admin">Admin</option>
      </select>
      {!showreset ? (
        <button onClick={() => setShowReset(true)}>Reset Password</button>
      ) : (
        <div>
          <input
            type="password"
            onChange={Passwordtype}
            placeholder="Type New Password"
          />
          <button
            onClick={() => {
              updatePassword(username, pw);
              setShowReset(false);
            }}
          >
            Save Password
          </button>
        </div>
      )}
    </div>
  );
}
