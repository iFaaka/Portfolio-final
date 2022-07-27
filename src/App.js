import { useState } from "react";
import "./App.css";
import { CuartoModulo } from "./components/Modulos/CuartoModulo/CuartoModulo";
import { PrimerModulo } from "./components/Modulos/PrimerModulo/PrimerModulo";
import { SegundoModulo } from "./components/Modulos/SegundoModulo/SegundoModulo";
import { TercerModulo } from "./components/Modulos/TercerModulo/TercerModulo";
import { MoreOrLess } from "./components/MoreOrLess/MoreOrLess";
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
    //Primer tarjeta
    fragment = <PrimerModulo nextWindow={setshowWindow} />;
  } else if (showWindow === 3) {
    //Trivia
    fragment = <Trivia nextWindow={setshowWindow} />;
  } else if (showWindow === 4) {
    //Segunda Tarjeta
    fragment = <SegundoModulo nextWindow={setshowWindow} />;
  } else if (showWindow === 5) {
    fragment = <MoreOrLess nextWindow={setshowWindow} />;
  } else if (showWindow === 6) {
    fragment = <TercerModulo nextWindow={setshowWindow} />;
  } else if (showWindow === 99) {
    fragment = <CuartoModulo nextWindow={setshowWindow} />;
  }

  return <div className="App">{fragment}</div>;
}

export default App;
