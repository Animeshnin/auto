import {makeAutoObservable} from "mobx";

export default class AutoStore{
    constructor() {
        this._types = []
        this._transmissions = []
        this._devices = []
        this._selectedType = {}
        this._selectedTransmissions = {}
        this._orders = []

        makeAutoObservable(this)
    }

    setOrder(orders){
        this._orders = orders
    }

    setTypes(types){
        this._types = types
    }

    setTransmission(transmissions){
        this._transmissions = transmissions
    }


    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedTransmission(transmission) {
        this._selectedTransmissions = transmission
    }

    get orders(){
        return this._orders
    }
    get types(){
        return this._types
    }

    get transmissions(){
        return this._transmissions
    }

    get devices() {
        return this._devices   }


    get selectedType() {
        return this._selectedType
    }

    get selectedTransmissions(){
        return this._selectedTransmissions
    }

}