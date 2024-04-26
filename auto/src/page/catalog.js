import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import DeviceItem from "../components/DeviceItem";
import {Context} from "../index";
import {fetchAuto, fetchBrand, fetchCarBody} from "../http/deviceApi";
import DeviceList from "../components/DeviceList";
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";

const Catalog = observer(()=> {
    const {auto} = useContext(Context)
    useEffect(() => {
        fetchCarBody().then(data => auto.setAutoBody(data))
        fetchBrand().then(data => auto.setTypes(data))
        fetchAuto(null, null).then(data => {
            auto.setDevices(data)
    })
    }, [])

    useEffect(() => {
        fetchAuto(auto.selectedAutoBody.id, auto.selectedType.id).then(data => {
            auto.setDevices(data)
        })
    },  [auto.selectedAutoBody, auto.selectedType])

    return(
        <div className={'wrapper'}>
            <Row className={'mt-5'} d>
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>

        </div>
    )
})
export default Catalog;