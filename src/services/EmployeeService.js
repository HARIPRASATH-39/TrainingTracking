import axios from "axios";
import UtilService from "./UtilService.js";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/Employees`;

const EmployeeService = {
  getAllEmployees: async () => {
    const response = await axios.get(`${BASE_URL}/getAll`, {
      headers: UtilService.getHeader(),
    });
    return response.data;
  },

  getEmployeeById: async (employeeId) => {
    const response = await axios.get(`${BASE_URL}/getById/${employeeId}`, {
      headers: UtilService.getHeader(),
    });
    return response.data;
  },

  updateEmployee: async (id, employeeData) => {
    const response = await axios.put(`${BASE_URL}/update/${id}`, employeeData, {
      headers: UtilService.getHeader(),
    });
    return response.data;
  },
};

export default EmployeeService;
