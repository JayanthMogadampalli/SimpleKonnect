import axios from "axios";

const BASE_URL = "http://localhost:8000/products"; // Update if backend is deployed

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

export const updateProduct = async (productId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${productId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${BASE_URL}/${productId}`);
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
};

