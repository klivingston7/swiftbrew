import React from "react";
import "./Header.css";

const Header = props => (
  
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm header">
    <a href="/home"><img className="headerImg" src="/media/SBc.png" alt=""/></a>
    <h5 className="navbar navbar-expand-md my-0 mr-md-auto font-weight-normal">Swift Brew</h5>
    <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 headLink" href="/menu/coffee">Menu</a>
        {/* <a className="p-2 headLink" href="#">Favorites</a> */}
        <a className="p-2 headLink" href="/orders">Orders</a>
        {/* <a className="p-2" id="contact" href="/about">About</a> */}
        <a className="p-2" id="contact" href="/contact">Contact</a>
        <a className="cart" href="/cart">
          <img className="cartImg" src="/media/SBCUP.png" alt=""/> 
        </a>
    </nav>
</div>

);
export default Header;
