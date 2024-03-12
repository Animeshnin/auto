import '../style/form.css'
import {useState} from "react";
function FormOrder(){

    let [date, setDate] = useState(() => {
        const  date = new Date()
        const month = (date.getMonth()+1).toString(); // Получаем месяц
        const day = date.getDate().toString(); // Получаем день
        // Возвращаем строку формата даты для input type=date
        return `${date.getFullYear()}-${month.length === 2 ? month : `0${month}` }-${day.length === 2 ? day : `0${day}`}`
    })

    return(
        <form className={'form'}>
            <div className={'form__border-bottom'}>
                <div className={''}>
                    <h6>Дата начала</h6>
                    <input type={'date'} value={date} onChange={e=> setDate(e.target.value)} id={'date'}/>

                </div>
                <div>
                    <h6>Дата окончание</h6>
                    <input type={'date'} value={date} onChange={e=> setDate(e.target.value)}/>
                </div>
            </div>
        </form>
    )

}

export default FormOrder