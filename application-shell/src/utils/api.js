import axios from "axios";

const getDefaultPath = () => {
  return process.env.API_BASE_URL || "https://localhost:5000/";
};

const transformResponse = (input) => {
  try {
    return JSON.parse(input);
  } catch {
    //  Ignore ;
  }
};

const buildHeader = (obj = {}) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  Object.assign(header, obj);
  return header;
};

const apiFactory = (baseUrl = getDefaultPath(), header = {}) => {
  const service = axios.create({
    baseURL: baseUrl,
    headers: buildHeader(header),
    transformResponse: [
      (data) => {
        if (typeof data === "string") {
          return transformResponse(data);
        }
        return data;
      },
    ],
  });

  service.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem("_token");
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config;
    },
    (_error) => {
      return _error;
    }
  );

  return service;
};

export default apiFactory;
