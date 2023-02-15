import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../context/BasketContext';

function Navbar() {
    const { setFilterText,filterText } = useBasket()

    const onChange = (e) => {
        setFilterText(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to={"/"} className="navbar-brand">
                    <i style={{ fontSize: "2.5rem", color: "black", fontWeight: "bold" }} className="fa-solid fa-book"></i>
                </Link>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo03">

                    <div className="d-flex me-5">
                        <input value={filterText} onChange={onChange} id='navbar-input' className="form-control me-1" type="search" placeholder="Kitap ara..." aria-label="Search" />
                        <button className="btn btn-outline-success" >ARA</button>
                    </div>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active" aria-current="page"></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/basket"} className="nav-link active" >Sepet
                                <i style={{ fontSize: "1.6rem" }} className="fa-solid fa-basket-shopping "></i>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
