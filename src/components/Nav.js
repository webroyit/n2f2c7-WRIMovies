import React from 'react';

import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <img
                className="nav__logo"
                src="images/logo.png"
                alt="Logo" />
            <img
                className="nav__avatar"
                src="images/icon.png"
                alt="Icon" />
        </div>
    )
}

export default Nav;
