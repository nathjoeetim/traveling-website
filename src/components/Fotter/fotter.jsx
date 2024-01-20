/* eslint-disable no-unused-vars */
import React from "react";
import "./fotter.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Fotter() {
  return (
    <div className="fotter">
      <div className=" secContainer container grid">
        <div className="logoDiv">
          <div className="fotterLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div className="social flex">
            <ImFacebook className="icon" />
            <BsTwitterX className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="fotterLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> Explore </a>
          </li>
          <li>
            <a href="#"> Travel </a>
          </li>{" "}
          <li>
            <a href="#"> Blog</a>
          </li>
        </div>

        <div className="fotterLinks">
          <span className="linkTitle">Contact Us</span>
          <div className="phone">1234567890</div>
          <div className="email">test@test.com</div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
