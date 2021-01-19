import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Store";
import MessageSquare from "../../assets/images/message-square.svg";
import Heart from "../../assets/images/heart.svg";
import Checkmark from "../../assets/images/checkmark.svg";
import "./card.scss";

const Card = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(!selected);
  };
  useEffect(() => {
    if (selected) {
      dispatch({
        type: "select-card",
        payload: state.selectedCard + 1,
      });
    } else {
      if (state.selectedCard !== 0) {
        dispatch({
          type: "select-card",
          payload: state.selectedCard - 1,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (state.selectedCard === 0) {
      setSelected(false);
    }
  }, [state.selectedCard]);

  return (
    <div
      className={
        state.layout === "list"
          ? selected
            ? `selected_card card list_layout`
            : `card list_layout`
          : selected
          ? `selected_card card`
          : `card`
      }
    >
      <div
        className={selected ? `selected select` : `select`}
        onClick={handleSelect}
      >
        <img src={Checkmark} alt="" />
      </div>
      <img src={`${props.data.name}.png`} alt="" />
      <div className="badge_container">
        {props.data.tags.map((value, index) => {
          return (
            <span key={index} className="badge">
              {value}
            </span>
          );
        })}
      </div>
      <h3>{props.data.name}</h3>
      <p>{props.data.desc}</p>
      <div className="card_footer">
        <span>
          <img src={MessageSquare} alt="" />
        </span>
        <span>
          <img src={Heart} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Card;
