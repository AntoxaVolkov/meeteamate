import "./TeamEdit.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TeamEditContainer from "containers/TeamEditContainer";

export default class TeamEdit extends PureComponent {
  static propTypes = { match: PropTypes.object };

  render() {
    const { match } = this.props;

    return (
      <div className="team-edit-page">
        <Container>
          <TeamEditContainer
            tid={+match.params.id}
            className="team-page__team"
          />
        </Container>
      </div>
    );
  }
}
