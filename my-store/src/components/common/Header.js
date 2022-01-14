import HeaderLink from "./HeaderLink";
import React from "react";
import '../../css/Header.css'


const Header = () => {
  return (
    <header>
      <div className="links">
        <h1> Hi Sami Co </h1>

        <nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/shop">Shop</HeaderLink>
          <HeaderLink to="/about-us">About Us</HeaderLink>
          <HeaderLink to="/signup">Sign up</HeaderLink>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/pay">Pay</HeaderLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;
