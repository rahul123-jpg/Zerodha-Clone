import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3002/auth/login", form);

    if (res.data.success) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "http://localhost:3001";  // Dashboard app open hoga
    } else {
      alert(res.data.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button type="submit">Login</button>
    </form>
  );
}
