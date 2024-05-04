import React, {useEffect, useState} from 'react';
import Gelik from '../img/gelik.jpg'
import {Image} from "react-bootstrap";
import '../style/personalArea.css'
import {useParams} from "react-router-dom";
import {
    deleteClientOrder,
    fetchClientOrder,
    fetchGetModelAuto,
    fetchOneAuto
} from "../http/deviceApi";
function PersonalArea() {
    const [clientOrder, setClientOrder] = useState(null)
    const [dataLoaded, setDataLoaded] = useState(false);
    const [auto, setAuto] = useState(null)
    const [brandName, setBrandName] = useState('')
    const {login} = useParams()


    console.log(login)
    useEffect(() => {
        fetchClientOrder(login).then(data => setClientOrder(data))
        console.log(login)
    }, [])

    console.log(clientOrder)

    useEffect(()=>{
        if(clientOrder && clientOrder[0]){
            setDataLoaded(true)
        }
    }, [clientOrder])
    function parseDate(date){
        const newDate = date.split("-")
        return newDate[2] + '.' + newDate[1] + "." + newDate[0]
    }

    function handleDeleteClick(id){
        deleteClientOrder(id).then(
            window.location.reload()
        ).catch(
            error => alert(error.response.data.message)
        )
    }

    console.log()

    return (
        <div className={'wrapper'}>
        {dataLoaded?
                <div className={'personal__area'}>
                    <div className={'personal__area-title'}>
                        <h1>Личный кабинет</h1>
                    </div>
                    <div className={'personal__area-region'}>
                        <div className={'personal__area-img'}>
                            <Image src={process.env.REACT_APP_API_URL + clientOrder[0].img} />
                        </div>
                        <div className={'personal__area-text'}>
                            <div className={'personal__area-additional__services'}>
                                <h4>Дополнительные услуги</h4>
                                <ul className={''}>
                                    {clientOrder[0].additionalServices.map((adko, index) =>
                                        <li>{index + 1}) {adko}</li>
                                    )}
                                </ul>
                            </div>
                            <div className={'d-flex pb-2'}>
                                <p>Статус:</p>
                                <p className={clientOrder[0].status ? "color__green" : "color__red"}>{clientOrder[0].status ? "Принято" : "В обработке"}</p>
                            </div>
                        </div>
                        <div className={'personal__area-date'}>
                            <div className={'personal__area-date-title'}>
                                <h3>Арендовано по:</h3>

                            </div>
                            <div className={'personal__area-date__calendar'}>
                            <p>{parseDate(clientOrder[0].date)} - {parseDate(clientOrder[0].expirationDate)}</p>
                            </div>
                        </div>
                        <div className={'personal__area-price'}>
                            <div>
                                <h3>Общая стоимость</h3>
                                <h4>{clientOrder[0].price} руб.</h4>
                            </div>

                            <div className={'personal__area-cancel'}>
                                <button className={'button__link link button-reservation duda'} onClick={() => handleDeleteClick(clientOrder[0].id)}>Отменить</button>
                                {console.log(clientOrder[0].id)}
                            </div>

                        </div>
                    </div>


                </div>
            : <h2>Нет арендованных машин</h2>

        }
            </div>

    );
}

export default PersonalArea;