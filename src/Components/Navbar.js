import { React, useEffect } from 'react'
import "./Navbar.css"
import Signup from './Signup'


function Navbar() {


    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-light ">
                <div className="container-fluid ms-4 me-4 navcon">
                    <a className="navbar-brand" href="#"><img src={require('../assests/whole.png')}></img></a>
                    <form className="d-flex searchform" role="search">
                        <img className="search" src={require('../assests/Vector.png')} alt="..."></img>
                        <input className="form-control me-2 searchbar" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
                    </form>
                    <div className="text">
                        
                        <p>Create account <a href="#"data-bs-toggle="modal" data-bs-target="#Login">It's Free </a><img src={require("../assests/Vector (1).png")}></img></p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar