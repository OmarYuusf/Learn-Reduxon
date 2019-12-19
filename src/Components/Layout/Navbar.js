import React from 'react';
import { Link } from "react-router-dom"

import SigninLinks from "./SigninLinks"
import SignupLinks from "./SignupLinks"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Quality</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <SigninLinks />
                    <SignupLinks />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;