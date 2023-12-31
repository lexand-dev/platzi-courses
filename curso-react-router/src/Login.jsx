import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Login() {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => (e.preventDefault(), auth.login({ username }));

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Entrar: </label>
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
