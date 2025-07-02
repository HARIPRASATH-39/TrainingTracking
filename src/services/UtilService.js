const UtilService = {
  getHeader: () => {
    const token = sessionStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  },

  logout: () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("grade");
  },

  isAuthenticated: () => {
    const token = sessionStorage.getItem("token");
    return !!token;
  },

  isAdmin: () => {
    const grade = sessionStorage.getItem("grade");
    return grade === "Associate";
  },
};

export default UtilService;
