/* eslint-disable no-unused-vars */
import React from "react";
import "./about.css";
import image from "../../assets/image3.jpg";
import image1 from "../../assets/image7.jpg";
import image2 from "../../assets/image4.jpg";
// import videos from "https://pin.it/7H6f6CdMb";

function About() {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Why Hiking</h2>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={image2} />
            <h3>100+ Mountains</h3>
            <p>
              {" "}
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being
            </p>
          </div>{" "}
          <div className="singleItem">
            <img src={image1} />
            <h3>2000+ Customers</h3>
            <p>
              {" "}
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being
            </p>
          </div>{" "}
          <div className="singleItem">
            <img src={image} />
            <h3>1000+ Hikings</h3>
            <p>
              {" "}
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful Driving Experience </h2>
              <p>
                The Adventure Subreanking is based on an equally weighted
                average of scores from five countries.{" "}
              </p>
            </div>
            <div className="cardVideo">
              <video src="" autoPlay loop muted type="video/mp4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
