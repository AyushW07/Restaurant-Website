import React from "react";
import "./Menu.css";

import SubHeading from "../../molecules/SubHeading/SubHeading";
import { images, data } from "../../../constants";
import MenuItems from "../../molecules/MenuItems/MenuItems";

function Menu() {
  return (
    <div className="menu flex__center section__padding" id="menu">
      <div className="menu_title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="menus">
        <div className="menus_main flex__center">
          <p className="menus_heading">Main Courses</p>
          <div className="menus_items">
            {data.main.map((main, index) => (
              <MenuItems
                key={main.title + index}
                title={main.title}
                price={main.price}
              />
            ))}
          </div>
        </div>

        <div className="menus_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="menus_chef flex__center">
          <p className="menus_heading">Chef's Specials</p>
          <div className="menus_items">
            {data.chef.map((chef, index) => (
              <MenuItems
                key={chef.title + index}
                title={chef.title}
                price={chef.price}
              />
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
