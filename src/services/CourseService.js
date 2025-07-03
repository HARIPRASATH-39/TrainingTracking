import axios from "axios";
import UtilService from "./UtilService.js";

const API_BASE = "http://localhost:8081/Courses";

const CourseService = {
  getAll: () =>
    axios.get(`${API_BASE}/find/getAll`, {
      headers: UtilService.getHeader(),
    }),

  getById: (id) =>
    axios.get(`${API_BASE}/find/getById/${id}`, {
      headers: UtilService.getHeader(),
    }),

  add: (course) =>
    axios.post(`${API_BASE}/add`, course, {
      headers: UtilService.getHeader(),
    }),

  update: (id, course) =>
    axios.put(`${API_BASE}/update/${id}`, course, {
      headers: UtilService.getHeader(),
    }),

  delete: (id) =>
    axios.delete(`${API_BASE}/delete/${id}`, {
      headers: UtilService.getHeader(),
    }),
};

export default CourseService;
