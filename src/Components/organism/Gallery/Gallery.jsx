import React, { useRef } from "react";
import "./Gallery.css";
import { data, images } from "../../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import SubHeading from "../../molecules/SubHeading/SubHeading";

function Gallery() {
  const scrollref = useRef();

  const scroll = (direction) => {
    const { current } = scrollref;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollRight += 300;
    }
  };

  const allImages = [
    images.gallery1,
    images.gallery2,
    images.gallery3,
    images.gallery4,
  ];

  return (
    <div className="gallery flex__center">
      <div className="gallery_content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          accusamus.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="gallery_image">
        <div className="image_container" ref={scrollref}>
          {allImages.map((image, index) => (
            <div
              className="image-card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="Gallery" />
              <BsInstagram className="instaIcon" />
            </div>
          ))}
        </div>

        <div className="image_arrow">
          <BsArrowLeftShort
            className="arrow_icon"
            onClick={() => scroll("left")}
          />
        </div>

        <div className="image_arrow">
          <BsArrowRightShort
            className="arrow_icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
