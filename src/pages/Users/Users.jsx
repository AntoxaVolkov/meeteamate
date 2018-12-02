import "./Users.scss";

import React, { PureComponent } from "react";

import UsersListContainer from "containers/UsersListContainer";

export default class Users extends PureComponent {
  render() {
    return (
      <div className="users">
        <UsersListContainer limit={10} />
      </div>
    );
  }
}
