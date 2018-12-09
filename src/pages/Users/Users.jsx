import "./Users.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import UsersListContainer from "containers/UsersListContainer";

export default class Users extends PureComponent {
  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    document.title = "meeTEAMate - Поиск пользователей";
  }

  render() {
    let page = this.props.match.params.page || 1;
    return (
      <div className="users">
        <UsersListContainer limit={10} page={+page} />
      </div>
    );
  }
}
