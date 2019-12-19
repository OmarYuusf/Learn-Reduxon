import React from 'react';
import { NavLink } from "react-router-dom"

const SigninLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="waves-effect waves-light btn-small pink lighten-2">O A</NavLink></li>
        </ul>
    );
};

export default SigninLinks;