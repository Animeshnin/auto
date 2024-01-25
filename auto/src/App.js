import './style/reset.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
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
