import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from "styled-components";
import "semantic-ui-css/semantic.min.css";
import "./config/polyfills";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Java from "./components/Java";
import Javascript from "./components/Javascript";
import Php from "./components/Php";
import Node from "./components/Node";
import MachineLearning from "./components/MachineLearning";
import Style from "./components/Style";
import About from "./components/About";
import { history } from "./middleware/history";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import theme from "./config/theme";

const date = new Date();
console.log("BUILD", "1.0.15", date.toDateString(), date.toTimeString());

if (module.hot) {
  module.hot.accept();
}

render(
  <ThemeProvider theme={theme}>
    <Provider store={store()}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/java/:article?" component={Java} />
          <Route exact path="/Javascript/:article?" component={Javascript} />
          <Route exact path="/php/:article?" component={Php} />
          <Route exact path="/node/:article?" component={Node} />
          <Route
            exact
            path="/machine-learning/:article?"
            component={MachineLearning}
          />
          <Route exact path="/style/:article?" component={Style} />
          <Route exact path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

registerServiceWorker();
