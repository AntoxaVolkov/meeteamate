import "./Header.scss";

import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

import classNames from "classnames";
import PropTypes from "prop-types";

import ProfoleBarContainer from "containers/ProfileBarContainer";
import ShowUser from "containers/ShowUser";
import ShowGuest from "containers/ShowGuest";

import Logo from "components/Logo";

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
            <Menu.Item header>
              <Logo className="header__logo" />
            </Menu.Item>
            <div className="header__menu">
              <ShowGuest>
                <Menu.Item>
                  <Link className="nav-link" to="/">
                    главная
                  </Link>
                </Menu.Item>
              </ShowGuest>
              <Menu.Item>
                <Link className="nav-link" to="/rules">
                  правила
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="nav-link" to="/faq">
                  чаво
                </Link>
              </Menu.Item>
              <ShowUser>
                <Menu.Item>
                  <Link className="nav-link" to="/search">
                    найти
                  </Link>
                </Menu.Item>
              </ShowUser>
            </div>
            <ProfoleBarContainer />
          </Menu>
        </Container>
      </header>
    );
  }
}
