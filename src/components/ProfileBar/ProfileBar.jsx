import "./ProfileBar.scss";

import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { NavLink as Link } from "react-router-dom";
import { Menu, Dropdown, Image } from "semantic-ui-react";

import avatar from "images/square-image.png";

export default class ProfileBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    userId: PropTypes.number,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func
  };

  static defaultProps = {};

  render() {
    const { userId, isAuthenticated, logout } = this.props;

    const loginBtn = (
      <Menu.Item>
        <Link className="nav-link ui positive button" to="/login">
          Войти
        </Link>
      </Menu.Item>
    );

    const profileDropdown = (
      <Dropdown
        trigger={
          <div>
            <Image src={avatar} avatar /> <span>Username</span>
          </div>
        }
        item
      >
        <Dropdown.Menu>
          <Dropdown.Item onClick={logout}>Выйти</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    const element = isAuthenticated ? profileDropdown : loginBtn;

    return <Fragment>{element}</Fragment>;
  }
}
