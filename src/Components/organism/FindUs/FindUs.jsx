import React from "react";
// import "./FindUs.css";
import { images, data } from "../../../constants";
import SubHeading from "../../molecules/SubHeading/SubHeading";

function FindUs() {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>

        <div className="find_content">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quae.
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#dcca87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 01:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 06:00 pm</p>
        </div>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="Find Us" />
      </div>
    </div>
  );
}

export default FindUs;
