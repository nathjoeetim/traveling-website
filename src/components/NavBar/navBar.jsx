/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

function NavBar() {
  // code to toggle naviagtion bar
  const [active, setActive] = useState("navBar");
  const [transparent, setTransparent] = useState("header");

  function showNav() {
    setActive("navBar activeNavbar");
  }

  function hideNavBar() {
    setActive("navBar");
  }

  // code to add background color
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };

  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              {" "}
              <SiYourtraveldottv className="icon" /> On Time Taxi
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>{" "}
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#"> Login</a>
              </button>
            </div>
            <div className="headerBtns flex">
              <button className="btn">
                <a href="#"> Sign Up</a>
              </button>
            </div>
          </ul>
          <div className="closeNavBar" onClick={hideNavBar}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon" onClick={showNav} />
        </div>
      </div>
    </section>
  );
}

export default NavBar;
