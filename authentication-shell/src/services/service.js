import apiFactory from "../utils/api";
import { BehaviorSubject } from "rxjs";
// const API_SERVER = "http://localhost:8080";
export const jwt = new BehaviorSubject(null);

export const loginCall = async (username, password) => {
    const data = {
        username,
        password
    }

    const res = await apiFactory().post("/auth/login", data);
    
    console.log(res.data.access_token)
    jwt.next(res.data.access_token);
    return res.data.access_token;
}


export async function getProfile(token) {
    return apiFactory().get("/authorized");
    // return await axios.get(`${API_SERVER}/authorized`, {
    //     headers: { "authorization": `Bearer ${token}` }
    // });
}