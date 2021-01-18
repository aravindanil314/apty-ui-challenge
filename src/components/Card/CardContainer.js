import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Card from "./Card";
import Group from "../../assets/images/Group.svg";
import Heart from "../../assets/images/heart.svg";
import Share from "../../assets/images/share.svg";
import "./card.scss";

const CardContainer = (props) => {
  const [data, setData] = useState([]);
  const [selectedNo, setSelectedNo] = useState(1);
  const [showoptions, setOptions] = useState(false);
  const getData = () => {
    fetch("CityData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (selectedNo > 0) {
      setOptions(true);
    } else {
      setOptions(false);
    }
  }, [selectedNo]);

  return (
    <>
      <div className="card_container">
        {data.map((value, index) => {
          return (
            <Card
              key={index}
              data={value}
              selectedNo={selectedNo}
              setSelectedNo={setSelectedNo}
            />
          );
        })}
      </div>
      <CSSTransition
        unmountOnExit
        in={showoptions}
        timeout={400}
        classNames="options-transition"
        appear
      >
        <div className="selected_options">
          <img src={Group} alt="" />
          <span>{selectedNo} item selected</span>
          <img src={Heart} alt="" />
          <img src={Share} alt="" />
        </div>
      </CSSTransition>
    </>
  );
};

export default CardContainer;
