import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Homepage/Home";
import Navbar from "./Components/Navbar";
import Checkout from "./Components/Checkout Page/Checkout";
import Login from "./Components/LoginPage/Login";
import Payment from "./Components/Payment Page/Payment";
import { auth } from "./Firebase/Firebase";
import { useDataLayerValue } from "./Context API/Datalayer";

function App() {
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
          <Route path="/payment">
            <Header />
            <Navbar />
            <Payment />
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
