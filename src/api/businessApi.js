import axios from "axios";

const BASE_URL = "http://localhost:8000/api/businesses"; // Update for deployment

export const fetchBusinesses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
};

export const fetchBusinessById = async (businessId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${businessId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching business details:", error);
    return null;
  }
};
