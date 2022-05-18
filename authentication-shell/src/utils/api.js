import axios from "axios";

const getDefaultPath = () => {
  return "https://f7ac-103-58-152-65.in.ngrok.io/";
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
