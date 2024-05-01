import {
    ABOUT__ROUTE,
    ADMIN__ROUTE, AUTO__ROUTE,
    CATALOG__ROUTE, CONTACTOR__ROUTE,
    LOGIN_ROUTE, PERSONAL_AREA__ROUTE,
    REGISTRATION__ROUTE,
} from "./consts";


import Registration from "./page/registration";
import Catalog from "./page/catalog";
import Auth from "./page/auth";
import Admin from "./page/admin";
import {Component} from "react";
import AutoPage from "./page/AutoPage";
import personalArea from "./page/personalArea";
import About from "./page/about";
import Contact from "./page/contact";
export const router = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:  REGISTRATION__ROUTE,
        Component: Registration
    },
    {
        path: CATALOG__ROUTE,
        Component: Catalog
    },
    {
        path: ADMIN__ROUTE,
        Component: Admin
    },
    {
        path: AUTO__ROUTE + '/:id/:brandId',
        Component: AutoPage
    },
    {
        path: PERSONAL_AREA__ROUTE + '/:login',
        Component: personalArea
    },
    {
        path: ABOUT__ROUTE,
        Component: About
    },
    {
        path: CONTACTOR__ROUTE,
        Component: Contact
    }
]

export default router