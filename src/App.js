import { useState } from "react";
import "./App.css";
import { PresentacionApp } from "./components/Presentacion/PresentacionApp";
import { SeleccionesApp } from "./components/SeleccionHistoria/SeleccionesApp";
import { Trivia } from "./components/Trivia/Trivia";

function App() {
  const [showWindow, setshowWindow] = useState(0);

  let fragment;
  if (showWindow === 0) {
    //Deslizables
    fragment = <SeleccionesApp nextWindow={setshowWindow} />;
  } else if (showWindow === 1) {
    //Presentacion
    fragment = <PresentacionApp nextWindow={setshowWindow} />;
  } else if (showWindow === 2) {
    //Trivia
    fragment = <Trivia nextWindow={setshowWindow} />;
  }

  return <div className="App">{fragment}</div>;
}

export default App;
