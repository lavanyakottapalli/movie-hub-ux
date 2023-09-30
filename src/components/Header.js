import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse col-md-2" id="navbarExample01">
                            <a className="navbar-brand ms-auto mt-2 mt-lg-0 movie-database" style={{ fontSize: '35px' }} href="#">
                                Movie Hub 
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
