import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutContext } from '../context/logoutContext';

function Navbar() {
    const {handleLogout,a} = useContext(LogoutContext);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const onLogoutClick = (e) => {
        e.preventDefault();
        handleLogout();
        console.log(a)
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        Navbar
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <span className="nav-link">
                                {user ? user.username : ""}
                            </span>
                            <button className="btn btn-outline-success" onClick={onLogoutClick} type="submit">
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
