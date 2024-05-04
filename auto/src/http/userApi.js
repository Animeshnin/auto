import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async(fio, passport, phone, email, login, password) =>{
    const {data} = await $host.post('api/user/registration', {fio, passport, phone, email, login, password, role: "USER"})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const registrationAdmin = async(fio, passport, phone, email, login, password) =>{
    const {data} = await $authHost.post('api/user/registration', {fio, passport, phone, email, login, password, role: "ADMIN"})
    return data
}

export const login = async (email, login, password) => {
    const {data} = await $host.post('api/user/login', {email, login, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const deleteAdmin = async(id) =>{
    const {data} = await $authHost.delete(`api/user/deleteAdmin/${id}`)
    return data
}

export const fetchAdmin = async() => {
    const {data} = await $host.get('api/user/getAllAdmin', {})
    return data
}
