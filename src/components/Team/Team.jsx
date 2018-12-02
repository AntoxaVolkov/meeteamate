import "./Team.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { Container, Segment, Grid, Button } from "semantic-ui-react";
import Emblem from "components/Emblem";

export default class Team extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const { className } = this.props;
    const teamClass = classNames("team", className);

    return (
      <div className={teamClass}>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={5}>
                <div className="team__column">
                  <Emblem className="team__emblem" />
                  <Button color="green" className="team__apply">
                    Подать заявку
                  </Button>
                  <Link className="ui primary button" to="/team/edit">
                    Редактировать
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column width={11}>
                <Segment
                  size="massive"
                  textAlign="center"
                  className="team__title"
                >
                  MEETEAMATE
                </Segment>
                <Segment>
                  <p className="team__short-description">
                    Проект, в котором люди могут создавать свои команды и
                    присоединяться к уже созданным, так как порой невозможно
                    найти команду для соревнований в доте, команду с которой вы
                    вместе будете учиться программированию.
                  </p>
                  <hr />
                  <div>
                    <span className="team__tag">#tag</span>
                    <span className="team__tag">#tag</span>
                    <span className="team__tag">#tag</span>
                    <span className="team__tag">#tag</span>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
