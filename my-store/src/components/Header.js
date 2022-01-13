import { Link } from "react-router-dom";
import React from "react";
import '../css/Header.css'


const Header = () => {
  return (
    <header>
      <div className="links">
        <h1> Hi Sami Co </h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/">About Us</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/pay">Pay</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
