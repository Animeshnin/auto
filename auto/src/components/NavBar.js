import React, {useContext} from 'react';
import logo from '../img/logo.png'
import '../style/NavBar.css'
import {
    ADMIN__ROUTE,
    CATALOG__ROUTE,
    LOGIN_ROUTE, PERSONAL_AREA__ROUTE,
    REGISTRATION__ROUTE
} from "../consts";
import {jwtDecode} from "jwt-decode";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const  navigate = useNavigate()
    const token = localStorage.getItem('token')
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
        <Container className={'header'}>

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
                                <button className={'button__link link'} onClick={() => navigate(`${PERSONAL_AREA__ROUTE}/${tokenLogin.login}`)}>Корзина</button>
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
        </Container>
    );
});

export default NavBar;