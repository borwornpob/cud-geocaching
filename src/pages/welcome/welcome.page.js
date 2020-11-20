import React from "react";
import "./welcome.styles.css";
import World from "./world.png";

const WelcomePage = () => {
  return (
    <div className="page-container">
      <svg className="container">
        <rect
          id="container"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="375"
          height="812"
        ></rect>
      </svg>
      <div className="Group_cud">
        <div id="cud">
          <span>cud</span>
          <br></br>
        </div>
        <div id="geocaching">
          <span>Geocaching</span>
        </div>
      </div>
      <svg className="Path_1" viewBox="0 0 312 72.588">
        <path
          id="Path_1"
          d="M 0 0 L 312 0 L 312 72.5875244140625 L 0 72.5875244140625 L 0 0 Z"
        ></path>
      </svg>
      <div id="start">
        <span>START</span>
      </div>
      <img id="world" src={World} alt="world" />
    </div>
  );
};

export default WelcomePage;
