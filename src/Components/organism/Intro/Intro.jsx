import React, { useRef, useState } from "react";
import "./Intro.css";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../../constants";

function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidref = useRef();

  const handleOnClick = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      vidref.current.pause();
    } else {
      vidref.current.play();
    }
  };

  return (
    <div className="intro">
      <video
        src={meal}
        ref={vidref}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="intro_overlay flex__center">
        <div className="intro_circle flex__center" onClick={handleOnClick}>
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
