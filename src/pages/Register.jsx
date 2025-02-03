import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/authApi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(email, password);
      alert("Signup Successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      setError(err.detail || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold">Sign Up</h2>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-6 w-80">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-red-600 text-white py-2 mt-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
