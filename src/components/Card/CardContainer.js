import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Store";
import { CSSTransition } from "react-transition-group";
import Card from "./Card";
import Group from "../../assets/images/Group.svg";
import Heart from "../../assets/images/heart.svg";
import Share from "../../assets/images/share.svg";
import "./card.scss";

const CardContainer = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [showoptions, setOptions] = useState(false);
  const getData = () => {
    fetch("CityData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  
  const handleReset = () => {
    dispatch({
      type: "select-card",
      payload: 0,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (state.selectedCard > 0) {
      setOptions(true);
    } else {
      setOptions(false);
    }
  }, [state.selectedCard]);

  return (
    <>
      <div className="card_container">
        {data.map((value, index) => {
          return <Card key={index} data={value} />;
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
          <img src={Group} alt="" onClick={handleReset} />
          <span>{state.selectedCard} item selected</span>
          <img src={Heart} alt="" />
          <img src={Share} alt="" />
        </div>
      </CSSTransition>
    </>
  );
};

export default CardContainer;
