import {makeAutoObservable} from "mobx";

export default class AutoStore{
    constructor() {
        this._types = []
        this._transmissions = []
        this._additionalServices = []
        this._autoBody = []
        this._devices = []
        this._selectedType = {}
        this._selectedTransmissions = {}
        this._selectedAutoBody = {}
        makeAutoObservable(this)
    }



    setTypes(types){
        this._types = types
    }

    setAdditionalServices(additionalServices) {
        this._additionalServices = additionalServices
    }

    setTransmission(transmissions){
        this._transmissions = transmissions
    }

    setAutoBody(autoBody){
        this._autoBody = autoBody
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

    setSelectedAutoBody(autoBody) {
        this._selectedAutoBody = autoBody
    }
    get types(){
        return this._types
    }

    get transmissions(){
        return this._transmissions
    }

    get autoBody() {
        return this._autoBody
    }

    get devices() {
        return this._devices   }

    get additionalServices() {
        return this._additionalServices
    }


    get selectedType() {
        return this._selectedType
    }

    get selectedTransmissions(){
        return this._selectedTransmissions
    }

    get selectedAutoBody(){
        return this._selectedAutoBody
    }

}