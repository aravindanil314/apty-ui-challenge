import React from "react";
import "./nav.scss";

const NavButton = (props) => {
  return (
    <button className={`${props.className} nav_bar_button`}>
      <img src={props.icon} alt="" />
    </button>
  );
};

export default NavButton;
