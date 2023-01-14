import React from 'react'
import { Link } from 'react-router-dom'

function Naigation() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" >React</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link mx-2 active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/favourite">Favourite</Link>
                            </li>

                            <li className="nav-item dropdown">

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" >Blog</Link></li>
                                    <li><Link className="dropdown-item">About Us</Link></li>
                                    <li><Link className="dropdown-item" >Contact us</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                            <li className="nav-item mx-2">
                                <Link className="nav-link text-dark h5" target="blank"><i className="fab fa-google-plus-square"></i></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link text-dark h5" target="blank"><i className="fab fa-twitter"></i></Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link text-dark h5" target="blank"><i className="fab fa-facebook-square"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Naigation