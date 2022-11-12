import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[407px] flex flex-col justify-between p-10 md:gap-0 gap-10 md:mb-0 mb-48"
    >
      <div className="footer pt-14">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Flouride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </div>
      <p className="text-center">Copyright 2022 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
