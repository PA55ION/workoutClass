import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./pages/browse/Browse";
import Home from "./pages/home/Home";
import Current from "./pages/Current";
import NotFound from "./pages/NotFound"

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
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
