import React from "react";
import Order from "./Order";
import { order } from "../StaticFile";

const App = (props) => {
  const { history } = props;
  return (
    <Order
      authorization={history.location.state}
      label={order.lable}
      theader={order.theader}
    />
  );
};

export default App;
