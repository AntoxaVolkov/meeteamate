import "./Header.scss";

import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

import classNames from "classnames";
import PropTypes from "prop-types";

import ProfoleBarContainer from "containers/ProfileBarContainer";

export default class Header extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;
    const headerClass =
      window.location.pathname === "/"
        ? classNames("header", "header--in-top")
        : classNames("header");
    return (
      <header className={headerClass}>
        <Container>
          <Menu>
            <Menu.Item header>Our Company</Menu.Item>
            <Menu.Item>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Menu position="right" />
            <ProfoleBarContainer />
          </Menu>
        </Container>
      </header>
    );
  }
}
