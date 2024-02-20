import './style/reset.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import {check} from "./http/userApi";
import {BrowserRouter} from "react-router-dom";
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";



function App() {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if(loading){
        return <Spinner animation={'grow'}/>
    }


  return (
    <div className="wrap">
        <BrowserRouter>
      <NavBar/>
            <div className={'content'}>
                <AppRouter/>
            </div>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
