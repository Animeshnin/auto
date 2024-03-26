import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import DeviceItem from "../components/DeviceItem";
import {Context} from "../index";
import {fetchAuto} from "../http/deviceApi";
import DeviceList from "../components/DeviceList";

const Catalog = observer(()=> {
    const {auto} = useContext(Context)
    useEffect(() => {
    fetchAuto().then(data => {
        auto.setDevices(data)
    })
    }, [])
    console.log(auto)
    return(
        <div>
        <DeviceList/>
        </div>
    )
})
export default Catalog;