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
            <div className="nav__area">
                <p>All data are from </p>
                <img
                    className="nav__avatar"
                    src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
                    alt="Icon" />
            </div>
           
        </div>
    )
}

export default Nav;
