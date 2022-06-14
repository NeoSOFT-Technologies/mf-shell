import { BehaviorSubject } from "rxjs";
import apiFactory from "../utils/api";
export const jwt = new BehaviorSubject("");

export const login = async (data) => {
  const res = await apiFactory().post("/auth/generateToken", data);
  jwt.next(res.data.data.access_token);
  sessionStorage.setItem("_token", jwt.value);
  return res.data.access_token;
};
export const register = async (data) => {
  const res = await apiFactory().post("/users", data);
  return res;
};
export const getUser = async () => {
  const res = await apiFactory().get("/users");
  return res.data;
};
export const getUserDetails = async (id: string) => {
  const res = await apiFactory().get(`/users/${id}`);
  return res.data;
};
export const updateUser = async (id: string, data: any) => {
  const res = await apiFactory().patch(`/users/${id}`, data);
  return res.data;
};
export const deleteUser = async (id: string) => {
  const res = await apiFactory().delete(`/users/${id}`);
  return res.data;
};

// export const getHomeData = async () => {
//   const res = await apiFactory().get("/");
//   console.log(res.data);
//   return res.data;
// };
export async function getProfile() {
  return apiFactory().get("/authorized");
}
