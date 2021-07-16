import React from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  return (
    <ul className="navbar">
      <li className="sidebar">
        <MenuIcon className="sidebar_icon" />
        <span className="sidebar_tag">All</span>
      </li>
      <li className="navbar_item">
        <a>Today's Deals</a>
      </li>
      <li className="navbar_item">
        <a>Customer Service</a>
      </li>
      <li className="navbar_item">
        <a>GIft Cards</a>
      </li>
      <li className="navbar_item">
        <a>Registry</a>
      </li>
      <li className="navbar_item">
        <a>Sell</a>
      </li>
    </ul>
  );
}

export default Navbar;
