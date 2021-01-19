import React from "react";
import Logo from "../../assets/images/logo.svg";
import Home from "../../assets/images/home.svg";
import Briefcase from "../../assets/images/briefcase.svg";
import Compass from "../../assets/images/compass.svg";
import Bell from "../../assets/images/bell.svg";
import Gear from "../../assets/images/gear.svg";
import Logout from "../../assets/images/log-out.svg";
import NavButton from "./NavButton";
import "./nav.scss";

const Icons = [
  {
    name: "home",
    icon: Home,
  },
  {
    name: "briefcase",
    icon: Briefcase,
  },
  {
    name: "compass",
    icon: Compass,
  },
  {
    name: "bell",
    icon: Bell,
  },
  {
    name: "gear",
    icon: Gear,
  },
];

const Nav = () => {
  return (
    <div className="nav_bar">
      <img src={Logo} alt="logo" className="logo" />
      {Icons.map((value, index) => {
        return <NavButton key={index} icon={value} />;
      })}
      <NavButton
        className="logout_btn"
        icon={{ name: "logout", icon: Logout }}
      />
    </div>
  );
};

export default Nav;
