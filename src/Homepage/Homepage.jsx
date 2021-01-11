import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import HomeImage from "../Images/girl-face.png";
import instagramIcon from "../Images/instagram.png";
import envelopeIcon from "../Images/envelope.png";
import snapChatIcon from "../Images/snapchat.png";
import twitterIcon from "../Images/twitter.png";
import axios from "axios";
const url = "https://hirng-x2021.glitch.me/api";

const Homepage = () => {
  const bottomNav = (title) => (
    <div className="bottom__Nav">
      <h4>{title}</h4>
    </div>
  );
  const [fullName, setFullName] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [snapLink, setSnapLink] = useState("");
  const [email, setEmailLink] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const urlData = await axios.get(url);
      const {
        data: {
          name,
          social_media: { twitter, instagram, snapchat, email },
        },
      } = urlData;
      console.log(twitter);
      setFullName(name);
      setTwitterLink(twitter);
      setInstagramLink(instagram);
      setSnapLink(snapchat);
      setEmailLink(email);
    };
    fetchData();
  }, []);
  return (
    <div className="head_app">
      <div className="home_body">
        {/* header text */}
        <div className="head_text">
          <h5>{fullName}</h5>
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
            <Link to={instagramLink}>
              <img src={instagramIcon} alt="" />
            </Link>
          </div>
          <div className="body_icon">
            <Link to={twitterLink}>
              <img src={twitterIcon} alt="" />
            </Link>
          </div>
          <div className="body_icon">
            <Link to={snapLink}>
              <img src={snapChatIcon} alt="" />
            </Link>
          </div>
          <div className="body_icon">
            <Link to={email}>
              <img src={envelopeIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
