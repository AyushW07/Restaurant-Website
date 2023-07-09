import React from "react";
import "./Newsletter.css";
import SubHeading from "../SubHeading/SubHeading";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter_heading">
        <SubHeading title="NewsLetter" />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">And never miss latest updates!</p>
      </div>

      <div className="newsletter_input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button className="custom__button">Subscibe</button>
      </div>
    </div>
  );
}

export default Newsletter;
