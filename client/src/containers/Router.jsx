import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SelectionPage from "./SelectionPage";
import ComparePage from "./ComparePage";
import ErrorPage from "./ErrorPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SelectionPage} />
      <Route path="/compare/:p1/:p2" component={ComparePage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </Router>
);

export default AppRouter;
