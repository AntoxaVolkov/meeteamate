import "./UsersItem.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Avatar from "components/Avatar";

export default class UsersItem extends PureComponent {
  static propTypes = { user: PropTypes.object.isRequired };

  static defaultProps = {};

  render() {
    const { user } = this.props;

    let src = `http://ror-jwt.herokuapp.com${user.picture.thumb.url}`;

    return (
      <div className="users-item">
        <Avatar url={src} medium />
        <div className="users-item__info">
          <Link to={`/profile/${user.id}`}>
            <p className="users-item__name">{user.fullname || user.username}</p>
          </Link>
          <p className="users-item__username">
            {user.fullname && user.username}
          </p>
          <p className="users-item__location">{user.city}</p>
        </div>
      </div>
    );
  }
}
