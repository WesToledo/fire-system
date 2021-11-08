import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { isAuthenticated } from "~/services/auth";

import Error404 from "./pages/NotFound/404.react";

import LoginPage from "~/pages/Login";

import HomePage from "~/pages/Home";
import LegislationPage from "~/pages/Legislation";
import SecurityTips from "./pages/SecurityTips";
import TalkWithUs from "./pages/TalkWithUs";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />

        <Route exact path="/home" component={HomePage} />
        <Route exact path="/legislacao" component={LegislationPage} />
        <Route exact path="/seguranca" component={SecurityTips} />
        <Route exact path="/fale-conosco" component={TalkWithUs} />

        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
