import React, {useContext} from 'react';
import logo from '../img/logo.png'
import '../style/NavBar.css'
import {
    ADMIN__ROUTE,
    CATALOG__ROUTE,
    LOGIN_ROUTE,
    REGISTRATION__ROUTE
} from "../consts";
import {jwtDecode} from "jwt-decode";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const  navigate = useNavigate()
    const token = localStorage.getItem('token')
    let tokenRole = null
    if (typeof token !== 'string'){

    } else {
        tokenRole = (jwtDecode(token))
    }


    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <header className={'header'}>
            <div className={'wrapper'}>
                <div className={'header__flex'}>
                    <div className={'header__logo'}>
                        <img className={'header__logo-img'} src={logo} alt={'asd'}/>
                    </div>
                <div className={'header__list'}>
                    <ul className={'header__ul'}>
                        <li className={'header__li'}><a className={'list__link link'} href={CATALOG__ROUTE}>Каталог</a></li>
                        <li className={'header__li'}><a className={'list__link link'}>Контакты</a></li>
                        <li className={'header__li'}><a className={'list__link link'}>О компании</a></li>
                    </ul>
                </div>

                    {user.isAuth ?
                            <div className={'header__authorization'}>
                                <button className={'button__link link'} onClick={() => logOut()}>Выход</button>
                                {tokenRole.role === 'ADMIN' ?
                                    <button className={'button__link link'} onClick={() => navigate(ADMIN__ROUTE)}>ADMIN</button>
                                    :
                                    ""
                                }
                            </div>
                            :
                            <button className={'button__link link'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button>


                    }
                </div>
            </div>
        </header>
    );
});

export default NavBar;