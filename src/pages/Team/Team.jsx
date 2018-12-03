import "./Team.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";

import TeamContainer from "containers/TeamContainer";

import PropTypes from "prop-types";
import classNames from "classnames";

export default class Team extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = { match: PropTypes.object };

  static defaultProps = {};

  render() {
    const { match } = this.props;

    return (
      <div className="team-page">
        <Container>
          <TeamContainer tid={+match.params.id} className="team-page__team" />
        </Container>
      </div>
    );
  }
}
