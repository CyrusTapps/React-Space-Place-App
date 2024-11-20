import { nasaApi, spaceflightApi } from "./axios.js";

export const nasaAPI = {
  getImageOfDay: (date) =>
    nasaApi.get("/planetary/apod", {
      params: {
        count: 1,
      },
    }),
};

export const spaceflightAPI = {
  getLatestArticles: () =>
    spaceflightApi
      .get("/articles", {
        params: {
          limit: 4,
        },
      })
      .then((response) => response.data.results) // Extract the results array
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      }),
};
