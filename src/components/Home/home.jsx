/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Travel Dot</h1>
          <p className="subTitle">
            Travel to your favorite city with respectful of environment
          </p>

          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="11/Meters" />
          </div>
          <div className="distDiv">
            <label htmlFor="destination">Destination</label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="$140-$500" />
          </div>

          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
