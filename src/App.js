import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Common Components/Header";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Common Components/Navbar";
import Checkout from "./Components/Checkout Page/Checkout";
import Login from "./Components/LoginPage/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
