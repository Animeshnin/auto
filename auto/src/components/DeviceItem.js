import React from 'react';
import '../style/DeviceItem.css'
import {AUTO__ROUTE} from "../consts";
import {useNavigate} from "react-router-dom";
const DeviceItem = ({auto}) => {
    const  navigate = useNavigate()
    return (

        <div style={{cursor:"pointer"}} className={'card__auto'} onClick={() => navigate(`${AUTO__ROUTE}/${auto.ida}`)}>
            <div className={'card__auto-image'}>
                <img className={'card__auto-img'}  src={process.env.REACT_APP_API_URL + auto.img} alt={'a'}/>
            </div>
            <div className={'card-mid'}>
                <div className={'card__auto-title'}>

                    {`${auto.brandId} ${auto.name}`}

                </div>
                <div className={"card__auto-description"}>
                    <p><span className={'gray'}>ГОД ВЫПУСКА</span> {auto.yearOfIssue}</p>
                    <p><span className={'gray'}>КПП</span> {auto.transmissionId === 1 ? "Мех." : "Авт."}</p>
                    <p><span className={'gray'}>МЕСТ</span> {auto.place}</p>
                </div>
                <div className={'card__auto-price'}>
                    <div className={'card-auto-price oneDay'}>
                        <h5>1 сутки</h5>
                        <p>от <span className={'fz-18'}>{auto.price} р.</span></p>
                    </div>
                    <div className={'card-auto-price threeDay'}>
                        <h5>3 суток</h5>
                        <p>от <span className={'fz-18'}>{auto.price * 3} р.</span></p>
                    </div>
                </div>
                <div className={'card__auto-button'}>
                    <a href={''} className={'default-button border-gray'}>Подробнее</a>
                    <a href={''} className={'default-button border-red'}>Забронировать</a>
                </div>
            </div>

        </div>
    );
}

export default DeviceItem;