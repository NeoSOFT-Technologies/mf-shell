import apiFactory from "../utils/api";
import { BehaviorSubject } from "rxjs";
export const jwt = new BehaviorSubject();

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
export const getUserDetails = async (id) => {
    const res = await apiFactory().get(`/users/${id}`);
    return res.data;
};
export async function getProfile(token) {
    return apiFactory().get("/authorized");
}
