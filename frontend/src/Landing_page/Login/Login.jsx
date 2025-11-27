import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post("https://zerodha-backend-ojuv.onrender.com/auth/login", form);

    if (res.data.success) {
      localStorage.setItem("loggedIn", "true");
        window.location.href = "https://zerodha-dashboard-b8.netlify.app"; 
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
      </nav>

      {/* Login box */}
      <form onSubmit={handleLogin} style={styles.formBox}>
        <h2 style={styles.heading}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          required={true}
           value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          required={true}
          style={styles.input}
            value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.switchText}>
          Don’t have an account? <a href="/signup" style={styles.link}>Signup</a>
        </p>
      </form>
    </div>
  );
}

// SAME FILE me CSS as JS object (Signup jaisa)
const styles = {
  page: {
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  navbar: {
    background: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2563eb",
  },
  navLink: {
    fontSize: "16px",
    color: "#2563eb",
    textDecoration: "none",
  },
  formBox: {
    width: "350px",
    margin: "60px auto",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
  switchText: {
    textAlign: "center",
    marginTop: "10px",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
  },
};
