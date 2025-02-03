import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/auth"; // Your FastAPI backend

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Signup failed");
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
};
