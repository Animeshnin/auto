import React, {useContext, useState} from 'react';
import logo from '../img/logo.png'
import '../style/NavBar.css'
import {
    ABOUT__ROUTE,
    ADMIN__ROUTE,
    CATALOG__ROUTE, CONTACTOR__ROUTE,
    LOGIN_ROUTE, PERSONAL_AREA__ROUTE,
    REGISTRATION__ROUTE
} from "../consts";
import {jwtDecode} from "jwt-decode";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import {Container} from "react-bootstrap";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const  navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [isOpen, setIsOpen] = useState();
    let tokenRole = null
    let tokenLogin = null

    if (typeof token !== 'string'){

    } else {
        tokenRole = (jwtDecode(token))
        tokenLogin = (jwtDecode(token))
    }


    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <div className={'header '}>
                <div className={'header__flex'}>
                    <div className={'header__logo'}>
                        <img className={'header__logo-img'} src={logo} alt={'asd'}/>
                    </div>

                    <div className={`header__fuflo ${isOpen? "active": ""}`}>
                        <div className={'header__list'}>
                            <ul className={'header__ul'}>
                                <li className={'header__li'}><a className={'list__link link'} href={CATALOG__ROUTE}>Каталог</a></li>
                                <li className={'header__li'}><a className={'list__link link'} href={CONTACTOR__ROUTE}>Контакты</a></li>
                                <li className={'header__li'}><a className={'list__link link'} href={ABOUT__ROUTE}>О компании</a></li>
                            </ul>
                        </div>

                        {user.isAuth ?
                            <div className={'header__authorization'}>
                                <button className={'button__link link burgerLon'} onClick={() => logOut()}>Выход</button>
                                <button className={'button__link link burgerLon'} onClick={() => navigate(`${PERSONAL_AREA__ROUTE}/${tokenLogin.login}`)}>Корзина</button>
                                {tokenRole.role === 'ADMIN' ?
                                    <button className={'button__link link burgerLon'} onClick={() => navigate(ADMIN__ROUTE)}>ADMIN</button>
                                    :
                                    ""
                                }
                            </div>
                            :
                            <button className={'button__link link'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</button>
                        }
                    </div>
                    <div className={'div__burger'}>
                        <button className={'header__menu-button'} onClick={() => setIsOpen(!isOpen)}><CiMenuBurger/></button>
                    </div>

                </div>
        </div>
    );
});

export default NavBar;