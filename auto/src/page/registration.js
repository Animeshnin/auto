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
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const click = async () => {
        try {
            if(EMAIL_REGEXP.test(email) && password.length>=6) {
                console.log(email)
                let data;
                data = await registration(fio, passport, phone, email, login, password)
                user.setUser(user)
                user.setIsAuth(true)
                navigate(CATALOG__ROUTE)
            }
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
                <form  onSubmit={click}>
                    <h2 className="welcom">{"Регистрация"}</h2>
                    <div className={"input-div"}>
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>

                            <input value={fio} onChange={e => setFio(e.target.value)} className="input" type="fio"
                                   name="text" placeholder={'Введите ФИО'} id="fio"/>
                        </div>
                    </div>
                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>

                            <InputMask id={'input'} className={'input'} value={passport}
                                       onChange={(e) => setPassport(e.target.value)} mask="9999 999999"
                                       placeholder="Введите паспорт"></InputMask>
                        </div>
                    </div>
                    <div className={"input-div "}>

                        <div className="i">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>

                            <InputMask id={'input'} className={'input'} value={phone}
                                       onChange={(e) => setPhone(e.target.value)} mask="+7 (999) 999-99-99"
                                       placeholder="Введите номер телефона"></InputMask>
                        </div>
                    </div>
                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>

                            <input value={email} onChange={e => setEmail(e.target.value)} className="input" type="email"
                                   name="email" placeholder={'Введите почту'} id="email"/>
                        </div>

                    </div>

                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>

                            <input value={login} onChange={e => setLogin(e.target.value)} className="input" type="text"
                                   name="text" placeholder={'Введите логин'} id="text"/>
                        </div>
                    </div>
                    <div className={"input-div "}>

                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <input value={password} onChange={e => setPassword(e.target.value)} minLength={6} className="input" type="password"
                                   name="password" placeholder={'Введите пароль'} id="password"/>
                        </div>

                    </div>
                    <div className={'flex__div'}>
                        <div className={'registration'}>
                            Есть аккаунт?  <NavLink to={LOGIN_ROUTE} className={'gray'}>Войдите!</NavLink>
                        </div>

                        <button  type={'submit'} className={'button__link'} onClick={click}>Зарегистрироваться</button>
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