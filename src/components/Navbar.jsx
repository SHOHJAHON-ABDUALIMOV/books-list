import React from "react";
import { Logo } from "../assets";
import { NavItem } from "../data";
import { Button } from "./UI/index";
import "./Pages.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar">
        <a href="!#" className="navbar__href">
          <img src={Logo} alt="no photo" />
          <span>Travel world</span>
        </a>
        <ul className="navbar__ul">
          {NavItem.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
          <Button text={"Book now"} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
