import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Current from "./pages/Current";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/current">
          <Current />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
