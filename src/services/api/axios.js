import axios from "axios";

// NASA APOD API instance
export const nasaApi = axios.create({
  baseURL: import.meta.env.VITE_NASA_API_URL,
  timeout: 10000,
  params: {
    api_key: import.meta.env.VITE_NASA_API_KEY,
  },
});

// Spaceflight News API instance
export const spaceflightApi = axios.create({
  baseURL: import.meta.env.VITE_SPACEFLIGHT_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Error handling interceptor
const errorInterceptor = (error) => {
  if (error.response) {
    console.error("Response error:", error.response.data);
  } else if (error.request) {
    console.error("Request error:", error.request);
  } else {
    console.error("Error:", error.message);
  }
  return Promise.reject(error);
};

nasaApi.interceptors.response.use((response) => response, errorInterceptor);
spaceflightApi.interceptors.response.use(
  (response) => response,
  errorInterceptor
);
