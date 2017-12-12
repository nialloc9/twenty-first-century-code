import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import "semantic-ui-css/semantic.min.css";
import "./config/polyfills";
import Error404 from "./components/Error404";
import App from './App';
import { history } from "./middleware/history";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

const date = new Date();
console.log("BUILD", "1.0.15", date.toDateString(), date.toTimeString());

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={Error404} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}

registerServiceWorker();