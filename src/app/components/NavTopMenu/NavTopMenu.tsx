import React from 'react';
import {Link} from 'react-router-dom';

import './NavTopMenu.css';

export const NavTopMenu = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom">
                <div className="container">
                    <Link className="navbar-brand" to="/">Hometask</Link>
                    <button className="navbar-toggler"><span className="navbar-toggler-icon"/></button>

                    <div className="navbar-collapse collapse d-sm-inline-flex">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/authors">Authors</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
