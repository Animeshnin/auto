import React, {useEffect, useState} from 'react';
import '../style/DeviceItem.css'
import {AUTO__ROUTE} from "../consts";
import {useNavigate} from "react-router-dom";
import {fetchGetModelAuto} from "../http/deviceApi";
import {Col} from "react-bootstrap";
const DeviceItem = ({auto}) => {
    const  navigate = useNavigate()
    const [brandName, setBrandName] = useState('')
    useEffect(() => {
        console.log(auto.brandId)
        fetchGetModelAuto(auto.brandId).then(data =>setBrandName(data))
    })
    return (

        <Col xl={4} lg={5} md={5} sm={9} xs={11} style={{cursor:"pointer"}} className={'card__auto mb-4 '} onClick={() => navigate(`${AUTO__ROUTE}/${auto.ida}/${auto.brandId}`)}>
            <div className={'card__auto-image'}>
                <img className={'card__auto-img'}  src={process.env.REACT_APP_API_URL + auto.img} alt={'a'}/>
            </div>
            <div className={'card-mid'}>
                <div className={'card__auto-title'}>

                    {`${brandName} ${auto.name}`}

                </div>
                <div className={"card__auto-description"}>
                    <p><span className={'gray'}>ГОД ВЫПУСКА</span> {auto.yearOfIssue}</p>
                    <p><span className={'gray'}>КПП</span> {auto.transmissionId === 1 ? "Мех." : "Авт."}</p>
                    <p><span className={'gray'}>МЕСТ</span> {auto.place}</p>
                </div>
                <div className={'card__auto-price'}>
                    <div className={'card-auto-price oneDay'}>
                        <h5>1 сутки</h5>
                        <p>от <span className={'price-catalog'}>{auto.price} р.</span></p>
                    </div>
                    <div className={'card-auto-price threeDay'}>
                        <h5>3 суток</h5>
                        <p>от <span className={'price-catalog'}>{auto.price * 3} р.</span></p>
                    </div>
                </div>
                <div className={'card__auto-button'}>
                    <a href={''} className={'default-button border-gray mobile-button'}>Подробнее</a>
                    <a href={''} className={'default-button border-red mobile-button'}>Забронировать</a>
                </div>
            </div>

        </Col>
    );
}

export default DeviceItem;