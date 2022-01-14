import HeaderLink from "./HeaderLink";
import React from "react";
import '../../css/Header.css'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="links">
        <Link to="/">
          <h1> Hi Sami Co </h1>
        </Link>
        <nav>
          <HeaderLink to="/shop">Shop</HeaderLink>
          <HeaderLink to="/about-us">About Us</HeaderLink>
          <HeaderLink to="/signup">Sign up</HeaderLink>
          <HeaderLink to="/pay">Pay</HeaderLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;
