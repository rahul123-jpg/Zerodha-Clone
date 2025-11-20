import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

      const res = await axios.post("https://zerodha-backend-ojuv.onrender.com/auth/signup", form);

    if (res.data.success) {
      alert("Signup successful");
      navigate("/login");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <div style={styles.navbar}>
      </div>

      {/* Signup Card */}
      <div style={styles.card}>
        <h2 style={styles.title}>Create your account</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </form>

        <p style={styles.text}>
          Already have an account?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#f7f7f7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  navbar: {
    width: "100%",
    padding: "15px 30px",
    backgroundColor: "white",
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "40px",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    color: "#0052cc",
    fontWeight: 600,
  },

  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: 600,
    color: "#333",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },

  button: {
    padding: "12px",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: 600,
    backgroundColor: "#0052cc",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  text: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
  },

  link: {
    color: "#0052cc",
    fontWeight: 600,
    cursor: "pointer",
  },
};
