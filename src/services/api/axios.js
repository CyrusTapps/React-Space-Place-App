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

// Error handling interceptor for both instances
const errorInterceptor = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Response error:", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request error:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error:", error.message);
  }
  return Promise.reject(error);
};

nasaApi.interceptors.response.use((response) => response, errorInterceptor);
spaceflightApi.interceptors.response.use(
  (response) => response,
  errorInterceptor
);
