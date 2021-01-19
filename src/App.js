import React, { useContext, useReducer } from "react";
import { AppContext, AppReducer } from "./Store";
import "./styles/common/app.scss";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import CardContainer from "./components/Card/CardContainer";

function App() {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState.state);
  let value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>
      <Nav />
      <Header />
      <CardContainer />
    </AppContext.Provider>
  );
}

export default App;
