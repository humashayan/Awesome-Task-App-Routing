import { LoginForm } from "./LoginForm";
import { Register } from "./Register";
import { useState } from "react";
export function LoginRegister() {
  const [register, setRegister] = useState(false);

  return (
    <div>
      {register ? (
        <Register setreg={setRegister} />
      ) : (
        <div>
          <LoginForm />
          <button onClick={() => setRegister(true)}>Register</button>
        </div>
      )}
    </div>
  );
}
