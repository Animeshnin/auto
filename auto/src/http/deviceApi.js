import {$authHost, $host} from "./index";


export const autoCreate = async (auto) =>{
    const {data} = await $authHost.post('api/auto/create', auto)
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand/', brand)
    return data
}

export const fetchGetModelAuto = async (id) => {
    const {data} = await $host.get('api/brand/name', {params:{
            id
        }})
    return data
}

export const deleteClientOrder = async (id) => {
    const {data} = await $authHost.delete('api/clientOrder/delete/' + id)
}

export const getAllClientOrder = async()=>{
    const {data} = await $authHost.get('api/clientOrder/')
    return data
}


export const fetchAuto = async (brandId, carBodyId) => {
    const {data} = await $host.get('api/auto', {params : {
            brandId, carBodyId
        }})

    return data
}

export const fetchCarBody = async () =>{
    const {data} = await $host.get('api/auto/getCarBody')
    return data
}

export const fetchOneAuto = async (id, brandId) => {
    const {data} = await $host.get(`api/auto/${id}/${brandId}`)
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
export const createOrder = async (name, login, phone, date, expirationDate, placeReceipt, price, additionalServices, autoName, brandName, img) => {
    const {data} = await $authHost.post('api/clientOrder/createClientOrder', {name, login, phone,date, expirationDate, placeReceipt, price, additionalServices, autoName, brandName, img})
    return data
}


export const fetchClientOrder = async (login) => {
    const {data} = await $authHost.get(`api/clientOrder/${login}`)
    return data
}

export const deleteAutoA = async(id) => {
    const {data} = await $authHost.delete(`api/auto/delete/${id}`)
    return data

}

export const fetchBrand = async () => {
    const {data} = await $authHost.get('api/brand')
    return data
}

export const fetchTransmission = async () => {
    const {data} = await $authHost.get('api/transmission')
    return data
}