import axios from 'axios';

const BASE_URL = 'http://localhost:3001/routers';

// Fetch all routers
export const fetchAllRouters = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching all routers:', error);
    throw error;
  }
};

// Fetch a single router by ID
export const fetchRouterById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching router with ID ${id}:`, error);
    throw error;
  }
};