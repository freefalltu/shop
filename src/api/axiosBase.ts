import axios from "axios";

const baseUrl = "https://dummyjson.com";

const axiosBase = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
