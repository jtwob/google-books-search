import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import Nav from "./Components/Nav/Nav";
import Jumbotron from "./Components/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
