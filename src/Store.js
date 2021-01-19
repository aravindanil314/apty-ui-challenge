import { createContext } from "react";
let initialState = { layout: "grid", selectedCard: 1 };
const context = {
  state: initialState,
  dispatch: (data) => {
    throw new Error("dispatch function must be overridden");
  },
};
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "change-layout":
      return { ...state, layout: action.payload };
    case "select-card":
      return { ...state, selectedCard: action.payload };
    default:
      return { ...state };
  }
};
export const AppContext = createContext(context);
