import axios from "axios";

const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

const axiosBase = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
