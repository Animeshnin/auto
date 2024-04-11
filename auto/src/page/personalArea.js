import React from 'react';
import Gelik from '../img/gelik.jpg'
import {Image} from "react-bootstrap";
import '../style/personalArea.css'
function PersonalArea() {
    return (
        <div className={'wrapper'}>
            <div className={'personal__area'}>
                <div className={'personal__area-title'}>
                    <h1>Личный кабинет</h1>
                </div>
                <div className={'personal__area-region'}>
                    <div className={'personal__area-img'}>
                        <Image src={Gelik} width={300}/>
                    </div>
                    <div className={'personal__area-text'}>
                        <div className="personal__area-name__auto">
                            <h3>Мерседез</h3>
                        </div>
                        <div className={'personal__area-additional__services'}>
                            <ul>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'personal__area-date'}>
                        <div className={'personal__area-date-title'}>
                            <h3>Арендовано по:</h3>
                        </div>
                        <div className={'personal__area-date__calendar'}>
                            <p>11.11.2024</p>
                            <p>20.11.2024</p>
                        </div>
                    </div>
                    <div className={'personal__area-price'}>
                        <div>
                            <h3>Общая стоимость</h3>
                            <h4>10 000</h4>
                        </div>
                        <div className={'personal__area-cancel'}>
                            <button>Отменить</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default PersonalArea;