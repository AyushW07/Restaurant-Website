import React from "react";
import "./MenuItems.css";

function MenuItems({ title, price }) {
  return (
    <div className="menuItems">
      <div className="menuItems_head">
        <div className="menuItems_name">
          <p className="p__cormorant" style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>

        <div className="menuItems_dash" />

        <div className="menuItems_price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
