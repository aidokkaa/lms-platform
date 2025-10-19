import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopNav from "../components/headers/HeaderForOthers";

const Register: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (!userContext) return null;
  const { register, loading, error } = userContext;

  const handleRegister = async () => {
    if (!firstname || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await register(firstname, email, password);
      alert("Registration successful!");
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
          <h2 style={{ marginBottom: "20px", color: "#333" }}>Register</h2>

          <input
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            style={inputStyle}
          />
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
            onClick={handleRegister}
            disabled={loading}
            style={{
              ...buttonStyle,
              background: loading ? "#9ca3af" : "#3b82f6",
            }}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p style={{ marginTop: "15px", fontSize: "13px", color: "#666" }}>
            Already have an account?{" "}
            <a href="/login" style={{ color: "#3b82f6" }}>
              Login
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

export default Register;
