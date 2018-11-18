//import 'semantic-ui-css/semantic.css';
import "./scss/main.scss";

import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "components/Layout";
import CheckRefreshService from "containers/CheckRefreshService";

import routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    console.log("Render app");
    return (
      <Fragment>
        <Layout>
          <Switch>
            {routes.map((route, idx) => (
              <Route key={idx} {...route} />
            ))}
          </Switch>
        </Layout>
        <CheckRefreshService />
      </Fragment>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app")
);
