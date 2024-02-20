import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async(fio, passport, phone, email, login, password) =>{
    const {data} = await $host.post('api/user/registration', {fio, passport, phone, email, login, password, role: "USER"})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, login, password) => {
    const {data} = await $host.post('api/user/login', {email, login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data}  = await $authHost.get('api/user/auth ')
    localStorage.setItem('token', data.token)
    return data.token
}
