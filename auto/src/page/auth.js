import React, {useContext, useState} from 'react';
import Logo from '../img/logo.png'
import '../style/auth.css'
import {NavLink, useNavigate} from "react-router-dom";
import {CATALOG__ROUTE, LOGIN_ROUTE, REGISTRATION__ROUTE} from "../consts";
import {observer} from "mobx-react-lite";
import {login, registration} from "../http/userApi";
import {Context} from "../index";






const Auth = observer(() => {
        const {user} = useContext(Context)
        const inputs = document.querySelector('.input');
        const navigate = useNavigate()
        const [email, setEmail] = useState('')
        const [loginUser, setLoginUser] = useState('')
        const [password, setPassword] = useState('')

        const click = async () => {
            try {
                let data;
                data = await login(email, loginUser, password)
                console.log(data)
                user.setUser(user)
                user.setIsAuth(true)
                navigate(CATALOG__ROUTE)
            } catch (e){
                alert(e.response.data.message)
            }
        }

        // const inputs = document.querySelectorAll('.input');
        //
        // function focusFunc() {
        //     let parent = this.parentNode.parentNode;
        //     parent.classList.add('focus')
        // }
        //
        // function blurFunc() {
        //     let parent = this.parentNode.parentNode;
        //     if (this.value === "") {
        //         parent.classList.remove('focus')
        //     }
        //
        // }
        //
        // inputs.forEach(input => {
        //     input.addEventListener('focus', focusFunc)
        //     input.addEventListener('blur', blurFunc)
        // })
        return (
            <div className="container__auth">
                <div className="img">
                    <img className="post" src={Logo} alt=""/>
                </div>

                <div className="login-container">
                    <form action="/login"  method="POST">
                        <h2 className="welcom">{"Авторизация"}</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fa-regular fa-envelope"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input value={email} onChange={e => setEmail(e.target.value)} className={`input`} type="email"
                                       name="email" id="login"/>
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Логин</h5>
                                <input className="input" type="login"
                                       value={loginUser} onChange={e => {setLoginUser(e.target.value)}}
                                       name="login" id="login"/>
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input className="input" type="password"
                                        value={password} onChange={e => setPassword(e.target.value)}
                                       name="password" id="password"/>
                            </div>
                        </div>
                        <div className={'flex__div'}>
                            <div className={'registration'}>
                                Нет аккаунта? <NavLink to={REGISTRATION__ROUTE}
                                                       className={'registration__gray'}>Зарегистрируйся!</NavLink>
                            </div>
                            <button onClick={click} type={'button'} className={'button__link registration__button'}>Войти</button>
                        </div>

                    </form>
                </div>

            </div>

        )
})

export default Auth;