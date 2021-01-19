import React from "react";
import "./nav.scss";

const NavButton = (props) => {
  return (
    <button className={`${props.className} nav_bar_button`}>
      {props.icon.name === "bell" && <span className="notification" />}
      <img src={props.icon.icon} alt="" />
    </button>
  );
};

export default NavButton;
