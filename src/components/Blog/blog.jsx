/* eslint-disable no-unused-vars */
import React from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";
import image0 from "../../assets/ny.jpeg";
import image1 from "../../assets/orleans.jpeg";
import image2 from "../../assets/sf.jpeg";
import image3 from "../../assets/Charleston.jpeg";

const blogData = [
  {
    id: 1,
    imgSrc: image1,
    title: "New Orleans",
    location:
      "New Orleans is a Louisiana city on the Mississippi River, near the Gulf of Mexico. ",
  },
  {
    id: 2,
    imgSrc: image2,
    title: " San Francisco",
    location:
      "San Francisco, officially the City and County of San Francisco, is the commercial, financial, and cultural center of Northern California.",
  },
  {
    id: 3,
    imgSrc: image0,
    title: " New-York",
    location:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.",
  },
  {
    id: 3,
    imgSrc: image3,
    title: "Charleston",
    location:
      "Charleston, the South Carolina port city founded in 1670, is defined by its cobblestone streets, horse-drawn carriages and pastel antebellum houses, particularly in the elegant French Quarter and Battery districts. ",
  },
];

function Blog() {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Cities?</h2>
          <p>An insite to the increadible Experience with On Time taxi. </p>
        </div>
        <div className="mainContainer grid ">
          {blogData.map(element => {
            return (
              <div key={element.id} className="singlePost grid">
                <div className="imgDiv">
                  <img src={element.imgSrc} alt="image name" />
                </div>
                <div className="postDetails">
                  <h2>{element.title}</h2>
                  <p>{element.location}</p>
                </div>
                <a href="#" className="flex">
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
