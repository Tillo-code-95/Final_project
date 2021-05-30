import React from 'react';
import { NavLink } from 'react-router-dom';
//import "./navbar.css";

export default function NavBar() {


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to = "/" className="nav-link active" aria-current="page">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/register" className="nav-link">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/news" className="nav-link">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to = "/details" className="nav-link disabled" tabindex="-1" aria-disabled="true"></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

/* <NavLink exact to="/" activeClassName="active text-success" >Login</NavLink>
<NavLink to="/form" activeClassName="text-success" >Form</NavLink>
<NavLink to="/section"  activeClassName="text-success" >Section</NavLink> */
