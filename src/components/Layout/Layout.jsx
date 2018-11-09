import "./Layout.scss";

import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Header";
import Footer from "components/Footer";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {};

  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Header />
        <main className="layout__page">{children}</main>
        <Footer />
      </div>
    );
  }
}
