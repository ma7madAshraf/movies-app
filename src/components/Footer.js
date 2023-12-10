import React from "react";
import mLogo from "../assets/mlogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        Designed by
        <img alt="logo" src={mLogo} />
      </div>
      <div className="right">
        copyright<span className="year">&copy;2023</span>{" "}
      </div>
    </div>
  );
};

export default Footer;
