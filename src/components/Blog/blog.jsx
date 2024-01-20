/* eslint-disable no-unused-vars */
import React from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";
import image0 from "../../assets/image2.jpg";
import image1 from "../../assets/image3.jpg";
import image2 from "../../assets/image4.jpg";

const blogData = [
  {
    id: 1,
    imgSrc: image1,
    title: "Machu picchu",
    location: "peru",
  },
  {
    id: 2,
    imgSrc: image2,
    title: " picchu",
    location: "NYC",
  },
  {
    id: 3,
    imgSrc: image0,
    title: " picchu Santure",
    location: "Lagod",
  },
];

function Blog() {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blogs?</h2>
          <p>An insite to the increadible Experience in the world. </p>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, voluptatem!
                  </p>
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
