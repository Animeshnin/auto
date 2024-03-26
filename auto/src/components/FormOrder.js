import '../style/form.css'
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {fetchAdditionalServices, fetchAuto} from "../http/deviceApi";
function FormOrder(props){
    const {auto} = useContext(Context)

    useEffect(() => {
        fetchAdditionalServices().then(data => {
            auto.setAdditionalServices(data)
        })
    }, [])



    let [date, setDate] = useState(() => {
        const  date = new Date()
        const month = (date.getMonth()+1).toString(); // Получаем месяц
        const day = date.getDate().toString(); // Получаем день
        // Возвращаем строку формата даты для input type=date
        return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}` }-${day.length === 2 ? day : `0${day}`}`
    })
    let [expirationDate, setExpirationDate] = useState(date)
    let [check, setChecked] = useState([])


    const checkClick = (e) => {
        let checkedSquare = e.target.value
        if(e.target.checked){
            setChecked([...check, e.target.value])

        } else {
            setChecked(check.filter((word) => word !== checkedSquare))
        }
    }

    return(
        <form className={'form'}>
            <div className={'form__border-bottom'}>
                <div className={''}>
                    <h6>Дата начала</h6>
                    <input className={'date'} type={'date'} value={date} onChange={e=> setDate(e.target.value)} id={'date'}/>

                </div>
                <div>
                    <h6>Дата окончание</h6>
                    <input className={'date'} type={'date'} value={expirationDate} onChange={e=> setExpirationDate(e.target.value)}/>
                </div>
            </div>
            <div className={"additionalServices"}>
                <h6>Дополнительные услуги</h6>
                {auto.additionalServices.map(additionalServices =>
                    <div className={'additionalServices-item'}>
                        <div className={'d-flex'}>
                            <input id={additionalServices.id} type={'checkbox'} onClick={(e) => checkClick(e)} value={additionalServices.name} className={'additionalServices-checkbox'}/>
                            <p  className={'padding-left'}>{additionalServices.name}</p>
                        </div>

                        <p className={'float-right'}>{additionalServices.price}</p>
                    </div>
                )}

            </div>
            {props.autos.price}



        </form>
    )

}

export default FormOrder