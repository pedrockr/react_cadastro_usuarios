import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";

import ImgLogo from "../../assets/images/logo.png";

const Logo = (props) => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={ImgLogo} alt="logo" />
      </Link>
    </aside>
  );
};

export default Logo;
