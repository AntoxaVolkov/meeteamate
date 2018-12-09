import "./Teams.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TeamsListContainer from "containers/TeamsListContainer";

export default class Teams extends PureComponent {
  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount() {
    document.title = "meeTEAMate - Поиск команд";
  }

  render() {
    let page = this.props.match.params.page || 1;
    return (
      <div className="teams">
        <TeamsListContainer limit={10} page={+page} />
      </div>
    );
  }
}
