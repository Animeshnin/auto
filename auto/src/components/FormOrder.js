import '../style/form.css'
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {fetchAdditionalServices} from "../http/deviceApi";
import {Button} from "react-bootstrap";

const FormOrder = (autos) =>{
    const {auto} = useContext(Context)
    const [price, setPrice] = useState(0)

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
    let [expirationDate, setExpirationDate] = useState(() => {
        let newExpirationDate =  date.split('-')
        newExpirationDate.splice(2,1, +newExpirationDate[2]+1)
        return newExpirationDate.join('-')
    })
    console.log(expirationDate)



    let [check, setChecked] = useState([])
    const checkClick = (e) => {
        let checkedSquare = e.target.value
        if(e.target.checked){
            setChecked([...check, checkedSquare])
            setPrice(+price+ +e.target.dataset.price)


        } else {
            setChecked(check.filter((word) => word !== checkedSquare))
            setPrice(price- e.target.dataset.price)
        }
    }

    let total =+autos.autos.price+ +price

    function updateExpirationDate(){
        let newExpirationDate =  date.split('-')
        newExpirationDate.splice(2,1, +newExpirationDate[2]+1)
        setExpirationDate(newExpirationDate.join('-'))
    }

    function calculate(date, expirationDate){
        return expirationDate.split('-').splice(2,1) - date.split('-').splice(2,1)

    }

    let sum = calculate(date, expirationDate)




    return(
        <form className={'form'}>
            <div className={'form__border-bottom'}>
                <div className={''}>
                    <h6 className={'additionalServices-P'}>Дата начала</h6>
                    <input className={'date'} type={'date'} value={date} onChange={e=> setDate(e.target.value)} id={'date'}/>

                </div>
                <div>
                    <h6 className={'additionalServices-P'}>Дата окончание</h6>
                    <input className={'date'} type={'date'} value={expirationDate <= date?updateExpirationDate(expirationDate)  : expirationDate} onChange={e=> setExpirationDate(e.target.value)}/>
                </div>
            </div>
            <div className={"additionalServices"}>
                <h6 className={'additionalServices-P mt-3 mb-3'}>Дополнительные услуги</h6>
                {auto.additionalServices.map(additionalServices =>
                    <div className={'additionalServices-item'}>
                        <div className={'d-flex'}>
                            <input id={additionalServices.id} type={'checkbox'} onClick={(e) => checkClick(e)} value={additionalServices.name} data-price={additionalServices.price} className={'additionalServices-checkbox '}/>
                            <p className={'padding-left'}>{additionalServices.name}</p>
                        </div>

                        <p className={'additionalServices-item-p'}>{additionalServices.price} руб.<span>/сутки</span></p>
                    </div>
                )}

            </div>
            <div className={'additionalServices'}>
                <h6 className={'additionalServices-P mt-3 mb-3'}>Подача к указанному адресу</h6>
            <div className={'additionalServices-item'}>
                 <div className={'d-flex'}>
                     <input type={"checkbox"} value={'В пределах города'}/>
                     <p className={'padding-left'}>В пределах города</p>
                 </div>
                <p className={'additionalServices-item-p'}>от 750 руб</p>
            </div>
            <div className={'additionalServices-item'}>
                <div className={'d-flex'}>
                    <input type={"checkbox"} value={'В пределах города'}/>
                    <p className={'padding-left'}>В аэропорт</p>
                </div>
                    <p className={'additionalServices-item-p'}>от 750 руб</p>
                </div>
                <div className={'additionalServices-item'}>
                    <div className={'d-flex'}>
                        <input type={"checkbox"} value={'В пределах города'}/>
                        <p className={'padding-left w-150'}>Выдача/приемка автомобиля в нерабочее время (20:30 - 09:00)</p>
                    </div>
                    <p className={'additionalServices-item-p'}>от 750 руб.</p>
                </div>
            </div>

            <div className={'total__price-order'}>
                <span className={'price-info'}>Итого: за <span className={'price'}>{sum === 1? +price + +autos.autos.price: autos.autos.price * sum + price}</span>&#8381; за {sum} суток</span>
            </div>
            <div className={'total__price-order'}>
                <span className={'price-info gray'}>Стоимость: от {autos.autos.price}&#8381; за сутки</span>
            </div>

            <div className={'button__order'}>
                <button className={'button__link link button-reservation'} type={'submit'}>Забронировать</button>
            </div>


        </form>
    )

}

export default FormOrder