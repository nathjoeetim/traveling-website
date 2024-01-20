/* eslint-disable no-unused-vars */
import React from "react";
import "./offers.css";
import image7 from "../../assets/logo.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import {
  MdBathtub,
  MdKingBed,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

const offerData = [
  {
    id: 1,
    imgSrc: image1,
    destTitle: "Machu picchu",
    location: "peru",
    price: "$7,452",
  },
  {
    id: 2,
    imgSrc: image2,
    destTitle: " picchu",
    location: "NYC",
    price: "$7.52",
  },
  {
    id: 3,
    imgSrc: image3,
    destTitle: " picchu Santure",
    location: "Lagod",
    price: "$7,142",
  },
];

function Offers() {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Form historical cities to natural specteculars, come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {offerData.map(element => {
            return (
              <div key={element.id} className="singleOffer">
                <div className="destImage">
                  <img src={element.imgSrc} alt="Image" />
                  <span className="discount">30% off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{element.price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenities flex">
                      <MdKingBed className="icon" />
                      <small> 2 Beds </small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdBathtub className="icon" />
                      <small> 1 Bath </small>
                    </div>
                    <div className="singleAmenities flex">
                      <FaWifi className="icon" />
                      <small> 2 Beds </small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdKingBed className="icon" />
                      <small>WI-FI</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdAirportShuttle className="icon" />
                      <small> Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    {element.destTitle}
                  </div>{" "}
                  <div className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
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

export default Offers;
