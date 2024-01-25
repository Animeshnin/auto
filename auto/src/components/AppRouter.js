import React from 'react';
import {
    LOGIN_ROUTE,
    REGISTRATION__ROUTE
} from "../consts";

import {Routes, Route} from 'react-router-dom'
import {router} from "../router";
const AppRouter = () => {
    return (
        <Routes>
            {router.map(({path, Component})=>
                <Route path={path} element={<Component/>}/>
            )}
        </Routes>
    );
};

export default AppRouter;