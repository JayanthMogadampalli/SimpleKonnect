import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/products"; // Your FastAPI backend URL

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Add a new product
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_BASE_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${productId}`, productData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${productId}`);
    return { message: "Product deleted successfully" };
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
