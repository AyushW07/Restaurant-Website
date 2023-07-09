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
          Discover Culinary Excellence at 7's restaurant : A Fusion of Flavors
        </p>
        {/* <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Welcome to our 7's restaurant, where culinary traditions and passion
          for flavors come together. Immerse yourself in the vibrant and diverse
          world of Indian Foods, as our talented chefs take you on a journey of
          taste sensations. From fragrant spices to mouthwatering curries, each
          dish on our menu is a masterpiece crafted with love and expertise. Our
          commitment to using fresh, locally sourced ingredients ensures that
          every bite is a celebration of authenticity and quality.Discover 7's
          restaurant, your gateway to Indian cuisine at its finest.
        </p> */}
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
