/* eslint-disable no-unused-vars */
import React from "react";
import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import image1 from "../../assets/mlf.jpeg";
import image2 from "../../assets/botanicalGarden.jpeg";
import image3 from "../../assets/aquarium.jpeg";
import image4 from "../../assets/zoo.png";

const Data = [
  {
    id: 1,
    imdSrc: image1,
    destTitle: "Martin Luther King, Jr. National Historical Park",
    location: "450 Auburn Ave NE, Atlanta, GA 30312, United States",
    grade: "Luther King, Jr. Historical Park",
  },
  {
    id: 2,
    imdSrc: image3,
    destTitle: "Georgia Aquarium",
    location: "225 Baker St NW, Atlanta, GA 30313, United States",
    grade: "Georgia Aquarium ",
  },
  {
    id: 3,
    imdSrc: image2,
    destTitle: "Atlanta Botanical Garden",
    location: "1345 Piedmont Ave NE, Atlanta, GA 30309, United States ",
    grade: "Atlanta Garden",
  },
  {
    id: 4,
    imdSrc: image4,
    destTitle: "Zoo Atlanta",
    location: " 800 Cherokee Ave SE, Atlanta, GA 30315, United States	",
    grade: "Zoo Atlanta",
  },
];

function Popular() {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculars, come see the best
              of Atlanta!
            </p>
          </div>
          {/* <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div> */}
        </div>

        <div className="mainContent grid">
          {Data.map(element => {
            return (
              <div key={element.id} className="singleDestination">
                <div className="destImage">
                  <img src={element.imdSrc} alt="a location" />

                  <div className="overlayInfo">
                    <h3>{element.destTitle}</h3>
                    <p>{element.location}.</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFotter">
                  <div className="number">0{element.id}</div>
                  <div className="destText flex">
                    <h6>{element.grade}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;
