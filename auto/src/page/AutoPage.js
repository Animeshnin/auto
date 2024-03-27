import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneAuto} from "../http/deviceApi";
import {Image, Row} from "react-bootstrap";
import '../style/AutoPage.css'
import FormOrder from "../components/FormOrder";


const AutoPage = () => {
    const {auto} = useContext(Context)
    const [autos, setAuto] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        fetchOneAuto(id).then(data =>  setAuto(data))

    }, [])
    console.log(autos.price)

    return(
        <div>
            <h1 className={"autoPage__h1"}>Прокат {autos.name}  <span className={'grayColor'}>в ЕКАТЕРИНБУРГЕ</span></h1>
            <Image width={1160} height={688} src={process.env.REACT_APP_API_URL + autos.img}/>
            <div className={'mt-5 d-flex justify-content-between'}>

                <div className={'characteristic'}>
                    <h2>Характеристики</h2>
                    <div className={'d-flex justify-content-between la'}>
                        <div className={'characteristic__question'}>
                            <ul>
                                <li>Год выпуска:</li>
                                <li>Количество сидений:</li>
                                <li>Кондиционер:</li>
                                <li>Тип привода</li>
                                <li>Пробег:</li>
                            </ul>
                        </div>
                        <div className={'characteristic__answer'}>
                            <ul >
                                <li className={"color-black"}>{autos.yearOfIssue}</li>
                                <li className={"color-black"}>{autos.place}</li>
                                <li className={"color-black"}>есть</li>
                                <li className={"color-black"}>{autos.run}</li>
                                <li className={"color-black"}>{autos.driveUnit}</li>

                            </ul>

                        </div>

                    </div>

                </div>


                <FormOrder autos={autos}/>
            </div>

        </div>



    )
}

export default AutoPage