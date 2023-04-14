import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Redirect, NavLink } from "react-router-dom";
import CreatePortfolio from './CreatePortfolio';
import Home from './Home';
import SignIn from './SignIn';
import menu from '../../src/img/menu.png';
import UserContext from "./UserContext";
import Contact from './Contact';

function Navbar() {
  const { username } = useContext(UserContext);

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex">
        <BrowserRouter>
          <nav id="navbar" className="navbar">
            <div className="logo">
              <h1><a>Portfolios Collection</a></h1>
            </div>
            <ul>
              <li><NavLink className="nav-link scrollto" to="/" activeClassName="active-link">Home</NavLink></li>
              <li>
                <NavLink className="nav-link scrollto" to={username ? "/create" : "/login"} activeClassName="active-link">
                  {username ? "Create Portfolio" : "Login to Create Portfolio"}
                </NavLink>
              </li>
              <li><NavLink className="nav-link scrollto" to="/login" activeClassName="active-link">Sign in</NavLink></li>
              <li><NavLink className="nav-link scrollto" to="/contact" activeClassName="active-link">Contact us</NavLink></li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
            {/* <img src = {menu} className="bi bi-list mobile-nav-toggle"/> */}
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="/create" element={<CreatePortfolio />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </header>
  );
}

export default Navbar;
