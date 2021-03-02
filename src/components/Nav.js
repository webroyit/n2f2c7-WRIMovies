import React, { useState, useEffect } from 'react';

import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    // Scroll listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        // Remove this listener when calling another same listener
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
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
