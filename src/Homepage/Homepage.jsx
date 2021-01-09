/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HomePage.css";
import HomeImage from "../Images/girl-face.png";
import instagramIcon from "../Images/instagram.png";
import envelopeIcon from "../Images/envelope.png";
import snapChatIcon from "../Images/snapchat.png";
import twitterIcon from "../Images/twitter.png";

const Homepage = () => {
  const bottomNav = (title) => (
    <div className="bottom__Nav">
      <h4>{title}</h4>
    </div>
  );
  return (
    <div className="head_app">
      <div className="home_body">
        {/* header text */}
        <div className="head_text">
          <h6>AQUILA AVEION</h6>
        </div>
        {/* body image */}
        <div className="body_center">
          <div className="body_centerImage">
            <img src={HomeImage} alt="" />
          </div>
        </div>
        {/* bottom header */}
        <div className="header_bottom">
          {bottomNav("HOME")}
          {bottomNav("ABOUT")}
          <div className="header-image">
            <img src={HomeImage} alt="" />
          </div>
          {bottomNav("GALLERY")}
          {bottomNav("CONTACT")}
        </div>
      </div>
      <div className="socialMedia">
        <div className="icon">
          <div className="top_icon">
            <img src={instagramIcon} alt="" />
          </div>
          <div className="body_icon">
            <img src={twitterIcon} alt="" />
          </div>
          <div className="body_icon">
            <img src={snapChatIcon} alt="" />
          </div>
          <div className="body_icon">
            <img src={envelopeIcon} alt="" />
          </div>
        </div>
      </div>
      {/* social media */}
    </div>
  );
};

export default Homepage;
