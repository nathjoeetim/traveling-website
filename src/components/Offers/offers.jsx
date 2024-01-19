/* eslint-disable no-unused-vars */
import React from "react";
import "./offers.css";
import image7 from "../../assets/logo.jpg";
import {
  MdBathtub,
  MdKingBed,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";

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
          <div className="singleOffer">
            <div className="destImage">
              <img src={image7} alt="Image" />
              <span className="discount">30% off</span>
            </div>
            <div className="offerBody">
              <div className="price flex">
                <h4>$1000</h4>
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
              <div className="lofcation flex">
                <MdLocationOn className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
