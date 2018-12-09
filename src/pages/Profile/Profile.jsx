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

  static propTypes = { match: PropTypes.object };

  static defaultProps = {};

  componentDidMount() {
    document.title = "meeTEAMate - Профиль";
  }

  render() {
    const { match } = this.props;

    return (
      <div className="profile-page">
        <Container>
          <ProfileContainer
            key={match.params.id}
            uid={+match.params.id}
            className="profile-page__profile"
          />
        </Container>
      </div>
    );
  }
}
