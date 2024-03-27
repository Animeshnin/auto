import {$authHost, $host} from "./index";


export const autoCreate = async (auto) =>{
    const {data} = await $authHost.post('api/auto/create', auto)
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand/', brand)
    return data
}

export const fetchAuto = async () => {
    const {data} = await $host.get('api/auto')
    return data
}

export const fetchOneAuto = async (id) => {
    const {data} = await $host.get(`api/auto/${id}`)
    return data
}

export const fetchAdditionalServices = async () => {
    const {data} = await $host.get('api/additionalServices')
    return data
}

export const createAdditionalServices = async (name, price) => {
    const {data} = await $authHost.post('api/additionalServices/create', {name, price})
    return data
}

export const fetchOneAdditionalServices = async (id) => {
    const {data} = await $host.get(`api/additionalServices/additionalServicesControllerOne`, {id})
    return data
}


export const fetchBrand = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchTransmission = async () => {
    const {data} = await $host.get('api/transmission')
    return data
}