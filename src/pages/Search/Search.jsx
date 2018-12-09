import "./Search.scss";

import React, { PureComponent } from "react";
import { Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Container, Grid, Segment, Button } from "semantic-ui-react";

import UsersListContainer from "containers/UsersListContainer";

import TeamFilter from "components/TeamFilter";
import UserFilter from "components/UserFilter";

import Teams from "pages/Teams";
import Users from "pages/Users";

export default class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div className="search">
        <Container>
          <Segment>
            Искать:{" "}
            <Button.Group>
              <Link to="/search" className="ui button">
                Команду
              </Link>
              <Button.Or />
              <Link to="/search/users" className="ui button">
                Пользователя
              </Link>
            </Button.Group>
          </Segment>
          <Grid>
            <Grid.Row column={2}>
              <Grid.Column width={4}>
                <Route exact path="/search" component={TeamFilter} />
                <Route exact path="/search/users" component={UserFilter} />
                <Route exact path="/search/teams" component={TeamFilter} />
                <Route
                  exact
                  path="/search/teams/:page"
                  component={TeamFilter}
                />
                <Route
                  exact
                  path="/search/users/:page"
                  component={UserFilter}
                />
              </Grid.Column>
              <Grid.Column width={10}>
                <Route exact path="/search" component={Teams} />
                <Route exact path="/search/users" component={Users} />
                <Route exact path="/search/teams" component={Teams} />
                <Route exact path="/search/teams/:page" component={Teams} />
                <Route exact path="/search/users/:page" component={Users} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
