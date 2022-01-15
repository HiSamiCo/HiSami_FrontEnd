import HeaderLink from "./HeaderLink";
import React from "react";
import '../../css/Header.css'
import logo from '../../images/logoHSC.png'


const Header = () => {
  return (
    <header>
      <div className="headerlogo">
        <img alt='flower logo' src={logo}></img>
        <h1> Hi Sami Co </h1>
      </div>
      <div className="links">
        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/shop">Shop</HeaderLink>
          <HeaderLink to="/about-us">About Us</HeaderLink>
          <HeaderLink to="/signup">Sign up</HeaderLink>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/pay">Checkout</HeaderLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;
