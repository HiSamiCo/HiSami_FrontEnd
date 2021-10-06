import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderStyle>
      <div className="header">
        <h1> Hi Sami Co </h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
          
        </nav>
      </div>

      
    </HeaderStyle>
  )
}

export default Header;

const HeaderStyle = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #3a506b;
  color: white;
  & .header {
    display: flex;
    height: 5rem;
    padding-top: 2.5rem;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.5rem;
    @media (max-width: 930px) {
      flex-direction: column;
      padding-bottom: 3rem;
    }
  }

  & h1 {
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 3rem;
  }
  & h1 img {
    height: 40px;
    width: 40px;
    margin-right: 1rem;
  }
  & a {
    color: #0b132b;
    text-decoration: none;
    margin: 0.5rem;
    font-weight: bold;
    background: #8ac2cf;
    padding: 0.5rem 1rem;
    border-radius: 10px;
  }
  & a:hover {
    transform: scale(1.5);
    background: #41acc4;
  }
`;
