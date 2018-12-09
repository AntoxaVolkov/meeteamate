import "./UsersList.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

import UsersItem from "components/UsersItem";

export default class UsersList extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
  };

  static defaultProps = { isFetching: false };

  render() {
    const { users, isFetching } = this.props;

    return (
      <Segment className="users-list">
        <Dimmer active={isFetching} inverted>
          <Loader />
        </Dimmer>
        {users.map(user => (
          <UsersItem key={user.id} user={user} />
        ))}
      </Segment>
    );
  }
}
