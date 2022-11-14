import { IAuthLogin, IAuthRegister } from "../interfaces/auth";
import instance from "./instance";


export const login = (user: IAuthLogin) => {
    return instance.post('login', user)
}
export const register = (user: IAuthRegister) => {
    return instance.post('register', user)
}