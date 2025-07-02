import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/Auth`;

const AuthService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response || error.message;
    }
  },
};

export default AuthService;
