import React from "react";

import "./App.css";
//import Nav from "./components/NavBar/Nav.jsx";
import About from "./components/About/About";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <LandingPage></LandingPage>}></Route>
      {/* <Route path="/about" render={() => <Nav onSearch={onSearch} />} /> */}
      <Route exact path="/about" render={() => <About />} />
    </div>
  );
}

export default App;
