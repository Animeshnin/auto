import React, {useState} from 'react';
import Logo from '../img/logo.png'
import '../style/auth.css'
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION__ROUTE} from "../consts";






const Auth = () => {


    const inputs = document.querySelector('.input');
    function handleClick(){


    console.log(inputs.parentNode.parentNode)

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
                <form action="/login" method="POST">
                    <h2 className="welcom">{"Авторизация"}</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input className={`input`} type="email" onClick={() => handleClick()}
                                   name="email" id="login"/>
                        </div>
                    </div>
                    <div className="input-div two">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input className="input" type="password"

                                   name="password" id="password"/>
                        </div>
                    </div>
                    <div className={'flex__div'}>
                        <div className={'registration'}>
                            Нет аккаунта? <NavLink to={REGISTRATION__ROUTE}
                                                   className={'gray'}>Зарегистрируйся!</NavLink>
                        </div>
                        <a className={'link'}>Войти</a>
                    </div>

                </form>
            </div>

        </div>


    );
};

export default Auth;