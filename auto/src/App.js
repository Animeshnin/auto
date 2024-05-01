import './style/reset.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";

import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";
import './style/global.css'




function App() {
    const {user} = useContext(Context)
    let check = localStorage.getItem('token')
    useEffect(() => {
        if(check) {
            user.setUser(true)
            user.setIsAuth(true)
        }
    })



  return (

        <BrowserRouter>
        <NavBar/>
            <div className={'content'}>
                <AppRouter/>
            </div>
        {/*<Footer/>*/}
        </BrowserRouter>

  );
}

export default App;
