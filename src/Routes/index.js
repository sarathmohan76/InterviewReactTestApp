import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./constants";
import NavBar from "../Components/NavBar";

export default function Routes() {
 
  return (
    <Router>
      <div>
        <NavBar navItem={ROUTE_CONSTANTS} />
        <Switch>
          {ROUTE_CONSTANTS.map((item,index) => {
            return <Route exact path={item.path} key={index} component={item.component} />;
          })}
        </Switch>
      </div>
    </Router>
  );
}
