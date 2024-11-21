import { nasaApi, spaceflightApi } from "./axios.js";

export const nasaAPI = {
  getImageOfDay: () =>
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
      .then((response) => response.data.results)
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      }),
};

export const issAPI = {
  getPassTimes: (latitude, longitude) =>
    fetch(
      `https://satellites.fly.dev/passes/25544?lat=${latitude}&lon=${longitude}&limit=5&days=15&visible_only=false`
    ).then((response) => response.json()),
};
