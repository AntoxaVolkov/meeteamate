import "./Teams.scss";

import React, { PureComponent } from "react";

import TeamsListContainer from "containers/TeamsListContainer";

export default class Teams extends PureComponent {
  render() {
    return (
      <div className="teams">
        <TeamsListContainer limit={10} />
      </div>
    );
  }
}
