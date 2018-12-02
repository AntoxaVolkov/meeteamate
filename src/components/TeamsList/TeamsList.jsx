import "./TeamsList.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TeamsItem from "components/TeamsItem";

export default class TeamsList extends PureComponent {
  static propTypes = {
    teams: PropTypes.array.isRequired
  };

  static defaultProps = {};

  render() {
    const { teams } = this.props;

    return (
      <div className="teams-list">
        {teams.map(team => (
          <TeamsItem key={team.id} team={team} />
        ))}
      </div>
    );
  }
}
