import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav nav-pills nav-fill">
            <NavLink className="nav-link" to="/">CV</NavLink>
            <NavLink className="nav-link" to="map">Map</NavLink>
            <NavLink className="nav-link" to="timer">Timer</NavLink>
        </nav>
    );
};

export default Navbar;
