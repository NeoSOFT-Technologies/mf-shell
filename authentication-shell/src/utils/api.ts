import axios from "axios";

const apiBaseUrl = process.env.API_BASE_URL || "https://localhost:5000/";
class ApiFactoryWrapper {
  private readonly baseURL;
  constructor(URL: string = apiBaseUrl) {
    this.baseURL = URL;
  }

  getDefaultPath = () => {
    return apiBaseUrl;
  };

  transformResponse = (input: string) => {
    try {
      return JSON.parse(input);
    } catch {
      /* Ignore */
      return false;
    }
  };

  buildHeader = (obj = {}) => {
    const header = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    Object.assign(header, obj);
    return header;
  };

  apiFactory = (baseUrl = this.getDefaultPath(), header = {}) => {
    const service = axios.create({
      baseURL: baseUrl,
      headers: this.buildHeader(header),
      transformResponse: [
        (data) => {
          if (typeof data === "string") {
            return this.transformResponse(data);
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
}

const apiFactory = new ApiFactoryWrapper().apiFactory;
export default apiFactory;
