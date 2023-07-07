import React from "react";
import "./Menu.css";

import SubHeading from "../../molecules/SubHeading/SubHeading";
import { images, data } from "../../../constants";

function Menu() {
  return (
    <div className="menu flex__center section__padding" id="menu">
      <div className="menu_title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="menus">
        <div className="menus_veg flex__center">
          <p className="menus_heading">Main Courses</p>
          <div className="menus_items">
            {data.wines.map((wine, index) => (
              <p>{wine.title}</p>
            ))}
          </div>
        </div>

        <div className="menus_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="menus_nonveg flex__center">
          <p className="menus_heading">Chef's Specials</p>
          <div className="menus_items">
            {data.cocktails.map((cocktail, index) => (
              <p>{cocktail.title}</p>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
}

export default Menu;
