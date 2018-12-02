import "./TeamEdit.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TeamEditContainer from "containers/TeamEditContainer";

export default class TeamEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div className="team-edit-page">
        <Container>
          <TeamEditContainer className="team-page__team" />
        </Container>
      </div>
    );
  }
}
