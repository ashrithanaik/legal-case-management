import axios from "axios";

const api = axios.create({
  baseURL: "https://legal-case-management-mzi6.onrender.com",
});

export default api;
