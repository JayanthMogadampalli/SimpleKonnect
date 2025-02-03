import axios from "axios";

const BASE_URL = "http://localhost:8000/auth"; // Update for deployment

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
