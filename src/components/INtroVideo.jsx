import React from "react";
import video from "../assets/introvideo.mp4";

function IntroVideo() {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
}

export default IntroVideo;
