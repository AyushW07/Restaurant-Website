import React from "react";
import "./About.css";

import { images } from "../../../constants";

function About() {
  return (
    <div className="about app__bg flex__center section__padding" id="about">
      <div className="about_content flex__center">
        <div className="about_content_about">
          <h1 className="headtext__cormorant ">About Us</h1>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to our 7's restaurant, where culinary traditions and passion
            for flavors come together. Immerse yourself in the vibrant and
            diverse world of Indian Foods, as our talented chefs take you on a
            journey of taste sensations. From fragrant spices to mouthwatering
            curries, each dish on our menu is a masterpiece crafted with love
            and expertise. Our commitment to using fresh, locally sourced
            ingredients ensures that every bite is a celebration of authenticity
            and quality.Discover 7's restaurant, your gateway to Indian cuisine
            at its finest.
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
            Our restaurant was established in 1994 with a passion for Indian
            cuisine. From our humble beginnings as a small family-owned eatery,
            we have grown into a beloved dining destination known for our
            commitment to providing an exceptional experience to our guests.
            Through hard work, dedication, and a strong focus on quality, 7's
            restaurant gradually earned the loyalty of locals and visitors
            alike.As our popularity grew, we expanded our menu, added more
            seating, and refined our dining experience to cater to the evolving
            tastes and preferences of our cherished patrons.
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
