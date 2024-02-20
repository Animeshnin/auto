import React from 'react';
import logo from '../img/logo.png'
import '../style/NavBar.css'
import {
    CATALOG__ROUTE,
    LOGIN_ROUTE,
    REGISTRATION__ROUTE
} from "../consts";
const NavBar = () => {
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
                <div className={'header__authorization'}>
                     <a className={'button__link link'} href={LOGIN_ROUTE}>Вход</a>
                    <a className={'button__link link'} href={REGISTRATION__ROUTE}>Регистрация</a>
                </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;