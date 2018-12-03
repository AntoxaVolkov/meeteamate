import "./Team.scss";

import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Container, Segment, Grid, Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { confApi } from "configApp";

import Emblem from "components/Emblem";

export default class Team extends PureComponent {
  static propTypes = {
    team: PropTypes.object,
    className: PropTypes.string
  };
  render() {
    const { team, className } = this.props;
    const teamClass = classNames("team", className);
    console.log(team);
    return (
      <div className={teamClass}>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={5}>
                <div className="team__column">
                  <Emblem
                    className="team__emblem"
                    url={confApi.baseUrl + team.picture.thumb.url}
                  />
                  <Button color="green" className="team__apply">
                    Подать заявку
                  </Button>
                  <Link className="ui primary button" to="/team/edit">
                    Редактировать
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column width={11}>
                <div className="team__info">
                  <Segment
                    size="massive"
                    textAlign="center"
                    className="team__title"
                  >
                    {team.title}
                  </Segment>
                  <Segment>
                    <p className="team__short-description">{team.summary}</p>
                    <hr />
                    <div>
                      <span className="team__tag">#tag</span>
                      <span className="team__tag">#tag</span>
                      <span className="team__tag">#tag</span>
                      <span className="team__tag">#tag</span>
                    </div>
                  </Segment>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment size="large" textAlign="center" className="team__heading">
            КТО МЫ
          </Segment>
          <Segment className="team__full-description">{team.body}</Segment>
        </Container>
      </div>
    );
  }
}
