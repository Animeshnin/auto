import React, {useContext, useState} from 'react';
import {CATALOG__ROUTE, LOGIN_ROUTE, REGISTRATION__ROUTE} from "../consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Logo from '../img/logo.png'
import '../style/auth.css'
import {observer} from "mobx-react-lite";

import { InputMask } from 'primereact/inputmask';
import {Context} from "../index";
import {registration} from "../http/userApi";


const inputs = document.querySelectorAll('.input');



const Registration = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const navigate = useNavigate()
    const [fio, setFio] = useState('')
    const [passport, setPassport] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
                data = await registration(fio, passport, phone, email, login, password)
                console.log(data)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(CATALOG__ROUTE)

        } catch (e){
            alert(e.response.data.message)
        }

    }


    return (
        <div className="container__auth">
            <div className="img">
                <img className="post" src={Logo} alt=""/>
            </div>

            <div className="login-container">
                <form action="/login" method="POST">
                    <h2 className="welcom">{"Регистрация"}</h2>
                    <div className={"input-div"}>
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <h5>ФИО</h5>
                            <input value={fio} onChange={e => setFio(e.target.value)} className="input" type="fio"
                                   name="name" id="fio"/>
                        </div>
                    </div>
                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <h5>Паспорт</h5>
                            <InputMask id={'input'} className={'input'} value={passport}
                                       onChange={(e) => setPassport(e.target.value)} mask="9999 999999"
                                       placeholder=""></InputMask>
                        </div>
                    </div>
                    <div className={"input-div "}>

                        <div className="i">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <InputMask id={'input'} className={'input'} value={phone}
                                       onChange={(e) => setPhone(e.target.value)} mask="+7 (999) 999-99-99"
                                       placeholder=""></InputMask>
                        </div>
                    </div>
                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input value={email} onChange={e => setEmail(e.target.value)} className="input" type="email"
                                   name="email" id="login"/>
                        </div>

                    </div>

                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Логин</h5>
                            <input value={login} onChange={e => setLogin(e.target.value)} className="input" type="login"
                                   name="login" id="login"/>
                        </div>
                    </div>
                    <div className={"input-div "}>

                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input value={password} onChange={e => setPassword(e.target.value)} className="input" type="password"
                                   name="password" id="password"/>
                        </div>

                    </div>
                    <div className={'flex__div'}>
                        <div className={'registration'}>
                            Есть аккаунт?  <NavLink to={LOGIN_ROUTE} className={'gray'}>Войдите!</NavLink>
                        </div>

                        <button className={'button__link'} onClick={click}>Зарегистрироваться</button>
                    </div>

                </form>
            </div>
        </div>
    );
})

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}


function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
        parent.classList.remove('focus')
    }

}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})


export default Registration;