import axios from "axios";
import { mainModule } from "process";

export const DEV_API = "http://localhost:8080/api";
// export const PROD_API = "https://";

export const $api = axios.create({
  baseURL: DEV_API,
  // withCredentials: true,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (config && config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
