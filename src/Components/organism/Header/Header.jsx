import React from "react";
import "./Header.css";
import SubHeading from "../../molecules/SubHeading/SubHeading";
import { images } from "../../../constants";

function Header() {
  return (
    <div className="header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info ">
        <SubHeading title="Chase the new flavour" />
        <h1 className="header_h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          voluptates optio ipsam nam facere, mollitia saepe unde veniam amet
          officiis itaque quo. Nobis, atque iusto cupiditate repellendus quas
          quibusdam asperiores soluta aliquam voluptates ipsa!
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="Welcome" />
      </div>
    </div>
  );
}

export default Header;
