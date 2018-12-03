import "./TeamAdd.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TeamAddContainer from "containers/TeamAddContainer";

export default class TeamAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div className="team-add-page">
        <Container>
          <TeamAddContainer className="team-page__add" />
        </Container>
      </div>
    );
  }
}
