import React, {useEffect, useRef, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import "./styles/App.css";
import {TimeContext} from "./context";
import Footer from "./components/Footer";

function App() {
    const count = useRef(null);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        count.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000);
    }, []);

    return (
        <TimeContext.Provider value={{timer, setTimer}}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </TimeContext.Provider>
    );
}

export default App;
