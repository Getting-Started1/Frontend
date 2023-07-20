import React from "react";
import "./Navbar.css";
import download from "../images/download.png"

function Navbar() {
  return (
    <>
      <nav className="nav_tag">
        <div className="nav_logo">
        
         
          <img src={download} alt='LOGO'/>
        </div>

        <ul className="navbar_elements">
          <li className="navbar_elements_list">
            <a href="/">HOME</a>
          </li>
          <li className="navbar_elements_list">
            <a href="#dashboard">DASHBOARD</a>
          </li>
          <li className="navbar_elements_list">
            <a href="#graph">GRAPH</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
