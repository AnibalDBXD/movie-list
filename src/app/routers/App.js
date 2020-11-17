import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../components/Layout";

const error404 = () => <h1>No Found</h1>;

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={error404} />
        </Switch>
      </Layout>
    </Router>
  );
}
