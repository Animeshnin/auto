import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {Row} from "react-bootstrap";

const DeviceList = observer(() => {
    const {auto} = useContext(Context)
    console.log(auto.devices)
    return(

            <Row  className='d-flex justify-content-around'>
                {auto.devices.map(auto =>

                    <DeviceItem key={auto.id} auto={auto}/>

                )}
            </Row>

    )
})

export default DeviceList;
