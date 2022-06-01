import React from "react";

import "./App.css";
//import Nav from "./components/NavBar/Nav.jsx";
import About from "./components/About/About";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import SelectLanguage from "./components/SelectLanguage/SelectLanguage";
import Inicio from "./components/Inicio/Inicio";
import SobreMi from "./components/SobreMi/SobreMi";
function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => <SelectLanguage></SelectLanguage>}
      ></Route>
      <Route
        exact
        path="/home"
        render={() => <LandingPage></LandingPage>}
      ></Route>
      <Route exact path="/inicio" render={() => <Inicio></Inicio>}></Route>
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/sobremi" render={() => <SobreMi />} />
    </div>
  );
}

export default App;
