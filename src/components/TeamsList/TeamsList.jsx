import "./TeamsList.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

import TeamsItem from "components/TeamsItem";

export default class TeamsList extends PureComponent {
  static propTypes = {
    teams: PropTypes.array.isRequired,
    isFetching: PropTypes.bool
  };

  static defaultProps = {};

  render() {
    const { teams, isFetching } = this.props;

    return (
      <Segment className="teams-list">
        <Dimmer active={isFetching} inverted>
          <Loader />
        </Dimmer>
        {teams.map(team => (
          <TeamsItem key={team.id} team={team} />
        ))}
      </Segment>
    );
  }
}
