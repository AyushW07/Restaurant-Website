import React from "react";
import "./Footer.css";

import { images } from "../../../constants";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import FooterOverlay from "../../molecules/FooterOverlay/FooterOverlay";
import Newsletter from "../../molecules/Newsletter/Newsletter";

function Footer() {
  return (
    <div className="footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="footer_links">
        <div className="contact">
          <h1 className="contact_header">Contact Us</h1>
          <p className="p__opensans">Mumbai, India</p>
          <p className="p__opensans">9876543101</p>
          <p className="p__opensans">9876543101</p>
        </div>

        <div className="social">
          <img src={images.logo7s} alt="logo" className="footer_logo" />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className="links_icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>

        <div className="working">
        <h1 className="contact_header">Working Hours</h1>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">10:00 am - 01:00 am</p>
          <p className="p__opensans">Saturday - Sunday</p>
          <p className="p__opensans">10:00 am - 06:00 pm</p>
        </div>
      </div>

      <div className="copy">
        <p className="p__opensans">2023 7s. All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
