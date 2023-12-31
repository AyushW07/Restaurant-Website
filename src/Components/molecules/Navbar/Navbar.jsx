import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../../constants/images";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={images.logo7s} alt="Logo" />
      </div>
      <ul className="navbar_links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar_login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="navbar_sm-screen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <div className="navbar_sm-screen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggle(false)}
            />
            <ul className="navbar_sm-screen_links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggle(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggle(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToggle(false)}>
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => setToggle(false)}>
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggle(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
