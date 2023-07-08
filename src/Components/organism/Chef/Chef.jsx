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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              suscipit magnam earum.
            </p>
          </div>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sed, iste consequuntur deleniti neque sunt unde consectetur
            incidunt, odio libero fugit quis nulla quos? Alias?
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
