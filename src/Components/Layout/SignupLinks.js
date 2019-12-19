import React from 'react';
import { NavLink } from "react-router-dom"

const SignupLinks = () => {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Sign in</NavLink></li>
        </ul>
    );
};

export default SignupLinks;