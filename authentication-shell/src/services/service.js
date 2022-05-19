import apiFactory from "../utils/api";
import { BehaviorSubject } from "rxjs";
export const jwt = new BehaviorSubject(null);

export const login = async (data) => {
    const res = await apiFactory().post("/auth/generateToken", data);
    console.log(res.data.data.access_token);
    jwt.next(res.data.data.access_token);
    sessionStorage.setItem("_token", jwt.value);
    return res.data.access_token;
}


export async function getProfile(token) {
    return apiFactory().get("/authorized");
}