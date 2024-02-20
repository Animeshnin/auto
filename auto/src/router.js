import {
    CATALOG__ROUTE,
    LOGIN_ROUTE,
    REGISTRATION__ROUTE
} from "./consts";


import Registration from "./page/registration";
import Catalog from "./page/catalog";
import Auth from "./page/auth";
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
    }
]

export default router