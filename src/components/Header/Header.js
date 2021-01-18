import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/menu.svg";
import GridView from "../../assets/images/grid-view-icon.svg";
import ListView from "../../assets/images/list-view-icon.svg";
import "./header.scss";

const Header = (props) => {
  const [layout, setLayout] = useState("grid");
  const layoutChange = (layout) => {
    setLayout(layout);
  };
  return (
    <div className="header">
      <div className="mob_header">
        <img src={Logo} alt="logo" />
        <img src={Menu} alt="menu" />
      </div>
      <h1>Discover great places to visit</h1>
      <div className="layout_change">
        <div
          className={layout === "grid" ? "view_icon active" : "view_icon"}
          onClick={() => {
            layoutChange("grid");
          }}
        >
          <img src={GridView} alt="" />
        </div>
        <div
          className={layout === "list" ? "view_icon active" : "view_icon"}
          onClick={() => {
            layoutChange("list");
          }}
        >
          <img src={ListView} alt="" />
        </div>
      </div>
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0, 100 C150, 200 350, 
                0 500, 100 L500, 00 L0, 0 Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;
