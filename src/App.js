import React from "react";
import LoginApp from "./components/login/App";
import { Switch, Route } from "react-router-dom";
import OrderApp from "./components/listofdata/App";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={LoginApp} />
        <Route path="/order" exact={true} component={OrderApp} />
      </Switch>
    </>
  );
};
export default App;
