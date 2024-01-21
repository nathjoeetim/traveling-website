/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Plan Your Trip With On Time taxi
          </h1>
          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel to your favorite city with On Time taxi
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="locationDiv"
          >
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="11/Meters" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="distDiv"
          >
            <label htmlFor="destination">Destination</label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="priceDiv"
          >
            <label htmlFor="price">Time</label>
            <input type="text" placeholder="Three hours from now " />
          </div>

          <button className="btn">Book</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
