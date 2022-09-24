import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <br />
      <div className="flex">
        <img src="./images/footer-dots-left.png" alt="left" />
        <img
          src="./images/footer-dots-right.png"
          alt="right"
          className="right"
        />
      </div>
      <h3 style={{ color: "white", textAlign: "center" }}>kb.testmyplan.io</h3>
      <hr></hr>
      <div className="icons">
        <FaLinkedinIn className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaFacebookF className="icon" />
      </div>
    </div>
  );
};

export default Footer;
