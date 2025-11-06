import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081", // ✅ Local backend URL
});

export default api;
