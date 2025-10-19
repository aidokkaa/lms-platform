import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopNav from "../components/headers/HeaderForOthers";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) return null;
  const { login, loading, error } = userContext;

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await login(email, password);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <TopNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 70px)",
          background: "#f0f2f5",
          fontFamily: "'Arial', sans-serif",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px 30px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            width: "350px",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          {error && (
            <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              ...buttonStyle,
              background: loading ? "#9ca3af" : "#3b82f6",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p style={{ marginTop: "15px", fontSize: "13px", color: "#666" }}>
            Don’t have an account?{" "}
            <a href="/register" style={{ color: "#3b82f6" }}>
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const inputStyle: React.CSSProperties = {
  padding: "12px",
  margin: "8px 0",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 0",
  width: "100%",
  marginTop: "15px",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 600,
  transition: "background 0.3s, transform 0.2s",
};

export default Login;
