import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // 🔥 NEW: loader state

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true); // 🔥 loader ON

    try {
      const res = await axios.post(
        "https://zerodha-backend-ojuv.onrender.com/auth/login",
        form
      );

      if (res.data.success) {
        localStorage.setItem("loggedIn", "true");

        // 1 second loader show (optional smoother UX)
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-b8.netlify.app";
        }, 1200);
      } else {
        alert(res.data.message);
        setLoading(false);
      }
    } catch (err) {
      alert("Login failed. Server error.");
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      
      {/* 🔥 FULL-PAGE LOADER (only when loading = true) */}
      {loading && (
        <div style={styles.loaderOverlay}>
          <div style={styles.spinner}></div>
          <p style={{ fontSize: "18px", marginTop: "10px", color: "white" }}>
            Logging in...
          </p>
        </div>
      )}

      {/* Navbar */}
      <nav style={styles.navbar}></nav>

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

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.switchText}>
          Don’t have an account?{" "}
          <a href="/signup" style={styles.link}>Signup</a>
        </p>
      </form>
    </div>
  );
}

// SAME FILE me JS CSS below:
const styles = {
  page: {
    background: "#f5f5f5",
    minHeight: "100vh",
    position: "relative",
  },

  /* 🔥 FULL SCREEN LOADER */
  loaderOverlay: {
    position: "fixed",
    inset: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  spinner: {
    width: "60px",
    height: "60px",
    border: "6px solid #fff",
    borderTop: "6px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  navbar: {
    background: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  },

  formBox: {
    width: "350px",
    margin: "60px auto",
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  heading: { textAlign: "center", marginBottom: "20px" },
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
  switchText: { textAlign: "center", marginTop: "10px" },
  link: { color: "#2563eb", textDecoration: "none" },
};

/* Spinner Animation - ADD this globally */
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleTag);
