import React, {useState} from 'react';
import {LOGIN_ROUTE, REGISTRATION__ROUTE} from "../consts";
import {NavLink} from "react-router-dom";
import Logo from '../img/logo.png'
import '../style/auth.css'

import { InputMask } from 'primereact/inputmask';

const inputs = document.querySelectorAll('.input');



const Registration = () => {

    const [value, setValue] = useState('')
    const [movie, setMovie] = useState(document.querySelectorAll('.input'))

    return (
        <div className="container__auth">
            <div className="img">
                <img className="post" src={Logo} alt=""/>
            </div>

            <div className="login-container">
                <form action="/login" method="POST">
                    <h2 className="welcom">{"Регистрация"}</h2>
                    <div className={"input-div "}>
                    <div className="i">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input  className="input" type="email"
                                   name="email" id="login"/>
                        </div>

                    </div>
                    <div className={"input-div "}>
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div>
                            <h5>Name</h5>
                            <input className="input" type="name"
                                   name="name" id="name"/>
                        </div>
                    </div>
                    <div className={"input-div "}>

                    <div className="i">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <InputMask id={'input'} className={'input'} value={value} onChange={(e) => setValue(e.target.value)} mask="+7 (999) 999-99-99" placeholder=""></InputMask>
                        </div>
                    </div>

                    <div className={"input-div "}>

                    <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input  className="input" type="password"
                                   name="password" id="password"/>
                        </div>

                    </div>
                    <div className={'flex__div'}>
                            <div className={'registration'}>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE} className={'gray'}>Войдите!</NavLink>
                            </div>

                        <a className={'button__link'}></a>
                    </div>

                </form>
            </div>
        </div>
    );
};

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