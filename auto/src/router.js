import {
    LOGIN_ROUTE,
    REGISTRATION__ROUTE
} from "./consts";
import auth from './page/auth'
import registration  from './page/registration'

import catalog from './page/registration'
export const router = [
    {
        path: LOGIN_ROUTE,
        Component: auth
    },
    {
        path:  REGISTRATION__ROUTE,
        Component: registration
    }
]

export default router