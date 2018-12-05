import "./Teams.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TeamsListContainer from "containers/TeamsListContainer";

export default class Teams extends PureComponent {
  static propTypes = {
    match: PropTypes.object
  };

  render() {
    return (
      <div className="teams">
        <TeamsListContainer limit={10} page={+this.props.match.params.page} />
      </div>
    );
  }
}
