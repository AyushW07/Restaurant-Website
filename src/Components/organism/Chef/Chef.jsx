import React from "react";
import "./Chef.css";
import SubHeading from "../../molecules/SubHeading/SubHeading";

import { images } from "../../../constants";

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="chef_content">
          <div className="chef_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              I am truly grateful for the opportunity to share my passion for
              culinary artistry with you.
            </p>
          </div>
          <p className="p__opensans">
            Join us at 7's Restaurant and allow our team to take you on an
            unforgettable culinary adventure, where exceptional flavors and
            impeccable service converge to create an experience that lingers
            long after your last bite.
          </p>
        </div>

        <div className="chef_sign">
          <p>Ayush Wasnik</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
