import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Common Components/Header";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Common Components/Navbar";
import Checkout from "./Components/Checkout Page/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
