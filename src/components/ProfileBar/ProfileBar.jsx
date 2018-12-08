import "./ProfileBar.scss";

import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { confApi } from "configApp";

import { NavLink as Link } from "react-router-dom";
import { Menu, Dropdown, Loader } from "semantic-ui-react";
import Avatar from "components/Avatar";

export default class ProfileBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    isAuthenticating: PropTypes.bool,
    logout: PropTypes.func
  };

  static defaultProps = {};

  render() {
    const { user, isAuthenticated, isAuthenticating, logout } = this.props;

    let element = (
      <Menu.Item>
        <Link className="nav-link ui positive button login" to="/login">
          Войти
        </Link>
      </Menu.Item>
    );

    const loader = (
      <Menu.Item>
        <Loader active inline="centered" size="small" />
      </Menu.Item>
    );

    if (isAuthenticating) {
      element = loader;
    } else if (isAuthenticated) {
      if (user && user.id) {
        let picture = confApi.baseUrl + user.picture.thumb.url;
        element = (
          <Dropdown
            trigger={
              <div className="profile-bar">
                <Avatar mini className="profile-bar__avatar" url={picture} />{" "}
                <span>{user.username || "Username"}</span>
              </div>
            }
            item
          >
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="nav-link" to="/profile">
                  Профиль
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Выйти</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      } else {
        element = loader;
      }
    }

    return <Fragment>{element}</Fragment>;
  }
}
