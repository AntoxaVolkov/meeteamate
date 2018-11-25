import "./ProfileBar.scss";

import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { NavLink as Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";
import Avatar from "components/Avatar";

import avatar from "images/square-image.png";

export default class ProfileBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    userId: PropTypes.number,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    isFetching: PropTypes.bool,
    logout: PropTypes.func
  };

  static defaultProps = {};

  render() {
    const { user, userId, isAuthenticated, isFetching, logout } = this.props;

    let element = (
      <Menu.Item>
        <Link className="nav-link ui positive button" to="/login">
          Войти
        </Link>
      </Menu.Item>
    );

    if (isAuthenticated) {
      if (user) {
        let picture = "http://ror-jwt.herokuapp.com" + user.picture.thumb.url;
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
              <Dropdown.Item onClick={logout}>Выйти</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      } else {
        element = "Loading...";
      }
    }

    return <Fragment>{element}</Fragment>;
  }
}
