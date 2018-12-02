import "./Search.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Container, Grid } from "semantic-ui-react";

import UsersListContainer from "containers/UsersListContainer";

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
          <Grid>
            <Grid.Row column={2}>
              <Grid.Column width={4}>Фильтры</Grid.Column>
              <Grid.Column width={10}>
                <UsersListContainer limit={10} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
