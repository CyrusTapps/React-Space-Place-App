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

/*********************************************************
 *  ███████╗██████╗  █████╗  ██████╗███████╗    ██████╗ ██╗      █████╗  ██████╗███████╗
 *  ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝
 *  ███████╗██████╔╝███████║██║     █████╗      ██████╔╝██║     ███████║██║     █████╗
 *  ╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝      ██╔═══╝ ██║     ██╔══██║██║     ██╔══╝
 *  ███████║██║     ██║  ██║╚██████╗███████╗    ██║     ███████╗██║  ██║╚██████╗███████╗
 *  ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝
 * ┌───────────────────────────────────────────────────────────────────────────────────┐
 * │     Created by: Shawn M. Tapps                                                    │
 * │     Created on: 2024-12-13 @ 17:35 GMT                                            │
 * │     Language: JavaScript                                                          │
 * └───────────────────────────────────────────────────────────────────────────────────┘
 *    ███████╗███╗   ███╗████████╗
 *    ██╔════╝████╗ ████║╚══██╔══╝
 *    ███████╗██╔████╔██║   ██║
 *    ╚════██║██║╚██╔╝██║   ██║
 *    ███████║██║ ╚═╝ ██║   ██║
 *    ╚══════╝╚═╝     ╚═╝   ╚═╝
 *
 * MIT License
 *
 * Copyright (c) 2024 Shawn M. Tapps
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *********************************************************/
