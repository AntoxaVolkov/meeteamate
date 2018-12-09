import "./TeamCard.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Emblem from "components/Emblem";

import { Segment, Grid } from "semantic-ui-react";

export default class TeamCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    team: PropTypes.object
  };

  static defaultProps = {};

  render() {
    const { team } = this.props;

    return (
      <Segment className="team-card">
        <Grid className="team-card__about-team" columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              <Emblem src mini />
            </Grid.Column>
            <Grid.Column>
              <p className="team-card__title">{team.title}</p>
              <p className="team-card__tags">
                {team.tags.map(tag => `#${tag} `)}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <hr className="team-card__hr" />
        <p>{team.summary}</p>
      </Segment>
    );
  }
}
