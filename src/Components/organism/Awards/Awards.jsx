import React from "react";
import "./Awards.css";
import { images, data } from "../../../constants";
import SubHeading from "../../molecules/SubHeading/SubHeading";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="award_card">
    <img src={imgUrl} alt="award" />

    <div className="award_card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

function Awards() {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="awards" />
      </div>
    </div>
  );
}

export default Awards;
