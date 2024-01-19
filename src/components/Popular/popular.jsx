/* eslint-disable no-unused-vars */
import React from "react";
import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

const Data = [
	{
		id:1,
		imdSrc : image1,
		destTitle: 'Mac Lib store',
		location : 'Peru',
		grade: 'Cultural Relax',
	},
	{
		id:2,
		imdSrc : image2,
		destTitle: 'lorrem House ',
		location : 'Ghana',
		grade: ' Relax & Grill ',
	},
	{
		id:3,
		imdSrc : image3,
		destTitle: 'Eren Store ',
		location : 'Lagos ',
		grade: ' Hostlline ',
	},
	{
		id:4,
		imdSrc : image4,
		destTitle: 'Mac Lib store',
		location : 'Peru',
		grade: 'Cultural Relax',
	},
]

function Popular() {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculars, come see the best
              of the world!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
					{Data.map((element )=>{
						return   <div key={element.id} className="singleDestination">
            <div className="destImage">
              <img src={element.imdSrc} alt="a location" />

              <div className="overlayInfo">
                <h3>{element.destTitle}</h3>
                <p>{element.location}.</p>
                <BsArrowRightShort className="icon" />

              </div>
            </div>
						<div className="destFotter">
							<div className="number">
								0{element.id}
							</div>
							<div className="destText flex">
								<h6>
									{element.location}
								</h6>
								<span className="flex">
									<span className="dot" >
										<BsDot className="icon"/>
									</span>
									Dot
								</span>
							</div>
						</div>
          </div>
					})}
        
        </div>
      </div>
    </section>
  );
}

export default Popular;
