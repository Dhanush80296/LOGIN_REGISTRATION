
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    setRegistered(true);
    setMessage("REGISTRATION SUCCESSFULL");
  };

  const login = () => {
    if (username === "admin" && password === "1234") {
      setMessage("LOGIN SUCCESSFULL");
    } else {
      setMessage("INVALID USERNAME OR PASSWORD");
    }
  };

  return (
    <div>
      <h2>Login / Registration</h2>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
