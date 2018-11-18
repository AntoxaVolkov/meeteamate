import "./Profile.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";

import ProfileContainer from "containers/ProfileContainer";

import PropTypes from "prop-types";
import classNames from "classnames";

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div className="profile">
        <Container>It is Profile page</Container>
        <Container>
          <ProfileContainer />
        </Container>
      </div>
    );
  }
}
