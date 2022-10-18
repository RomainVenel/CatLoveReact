import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

const Navbar=() => {

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="title-button">
                    <img alt="Cat" src={require('./../../assets/logo.svg').default}/>
                </Link>
                <div className="buttons">
                    <ul className="navbar-list">
                        <Link to="/vote" className="title-button">Vote</Link>
                        <Link to="/favoris" className="title-button">Favoris</Link>
                        <Link to="/contact" className="title-button">Contact</Link>
                    </ul>
                </div>
            </nav>
        </>
    )

}

export default Navbar;