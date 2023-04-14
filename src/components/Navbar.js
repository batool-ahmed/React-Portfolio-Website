import React, {useContext} from 'react'
import {BrowserRouter, Routes, Route, Redirect, Link } from "react-router-dom";
import CreatePortfolio from './CreatePortfolio'
import Home from './Home'
import SignIn from './SignIn'
import menu from '../../src/img/menu.png'
import UserContext from "./UserContext";


function Navbar() {
  const { username } = useContext(UserContext);

  return (
    <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1><a>Portfolios Collection</a></h1>
      </div>
        <BrowserRouter>
            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="nav-link scrollto" ><Link to='/' target='_self'>Home</Link></a></li>
                <li><a className="nav-link scrollto ">{username ? <Link to='/create' target='_self'>Create Portfolio</Link>:<Link to='/login' target='_self'>Create Portfolio</Link>}</a></li>
                <li><a className="nav-link scrollto"><Link to='/login' target='_self'>Sign in</Link></a></li>
                </ul>
                {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
                {/* <img src = {menu} className="bi bi-list mobile-nav-toggle"/> */}
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/login' element={<SignIn/>}></Route>
                <Route exact path='/create' element={<CreatePortfolio/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  </header>
  )
}

export default Navbar