import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchGetModelAuto, fetchOneAuto} from "../http/deviceApi";
import {Image, Row} from "react-bootstrap";
import '../style/AutoPage.css'
import FormOrder from "../components/FormOrder";
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import svg23 from '../img/23.svg'
import autoSvg from '../img/auto.svg'


const AutoPage = () => {
    const {auto} = useContext(Context)

    const [autos, setAuto] = useState({slider: []})
    const {id} = useParams()
    const {brandId} = useParams()
    console.log(id, brandId)
    const [brandName, setBrandName] = useState('')

    useEffect(()=> {
        fetchOneAuto(id, brandId).then(data =>  setAuto(data))

    }, [])

    useEffect(() => {
        console.log(brandId)
        fetchGetModelAuto(brandId).then(data =>setBrandName(data))
    })
    return (
        <div>
            <div className={'wrapper'}>
                <h1 className={"autoPage__h1"}>Прокат {brandName} {autos.name}  <span className={'grayColor'}>в ЕКАТЕРИНБУРГЕ</span></h1>

            </div>
            <div>
                <Swiper className={'wrapperSwiper '}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={true}
                        onSlideChange={() => console.log('slide change')}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                >
                    {autos.slider.map((slide) => (
                        <SwiperSlide style={{width: "1300px"}}>
                            <Image width={1300} src={process.env.REACT_APP_API_URL + slide.sliderImg}/>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

            <div>
            </div>
            <div className={'mt-4 d-flex justify-content-between wrapper'}>


                <div className={'rentalConditions'}>
                    <h5>Условия аренды</h5>
                    <div className={'rentalConditions-list'}>
                        <div className={'rentalConditions-div'}>
                            <img className={"rentalConditions-img"} src={svg23} alt={'ds'}/>
                            <div className={'rentalConditions-element'}>
                                <p>Возраст</p>
                                <p>от 23-х лет</p>
                            </div>
                        </div>

                        <div className={'rentalConditions-div'}>
                            <img src={autoSvg} className={"rentalConditions-img"} alt={'ds'}/>
                            <div className={'rentalConditions-element'}>
                                <p>Возраст</p>
                                <p>от 23-х лет</p>
                            </div>
                        </div>

                    </div>
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
                                <ul>
                                    <li className={"color-black"}>{autos.yearOfIssue}</li>
                                    <li className={"color-black"}>{autos.place}</li>
                                    <li className={"color-black"}>есть</li>
                                    <li className={"color-black"}>{autos.run}</li>
                                    <li className={"color-black"}>{autos.driveUnit}</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>


                <FormOrder autos={autos} brandName={brandName}/>
            </div>

        </div>


    )
}
//


export default AutoPage