import "./UsersList.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import UsersItem from "components/UsersItem";

export default class UsersList extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  static defaultProps = {};

  render() {
    const { users } = this.props;

    return (
      <div className="users-list">
        {users.map(user => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
