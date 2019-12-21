import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Quotes</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">All</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/starWars">Star Wars</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/jamesBond">James Bond</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/johnWick">John Wick</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/humor">Humor</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/motivation">Motivation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/addQuote">Post Quote</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;