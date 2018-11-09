import "./Header.scss";

import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

import classNames from "classnames";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;
    const headerClass = classNames("header");

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
            <Menu.Item>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link className="nav-link" to="/">
                Link 2
              </Link>
            </Menu.Item>
          </Menu>
        </Container>
      </header>
    );
  }
}
