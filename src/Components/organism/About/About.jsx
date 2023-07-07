import React from "react";
import "./About.css";

import { images } from "../../../constants";

function About() {
  return (
    <div className="about app__bg flex__center section__padding" id="about">
      {/* <div className="about-overlay flex__center">
        <img src={images.G} alt="letter" />
      </div> */}
      <div className="about_content flex__center">
        <div className="about_content_about">
          <h1 className="headtext__cormorant ">About Us</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, commodi id. Possimus in fugit molestias molestiae?
            Fuga consequatur modi ipsam.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="about_content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>

        <div className="about_content_history">
          <h1 className="headtext__cormorant ">Our History</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, commodi id. Possimus in fugit molestias molestiae?
            Fuga consequatur modi ipsam.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
