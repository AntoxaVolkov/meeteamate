import "./ProfileEdit.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";

import ProfileEditContainer from "containers/ProfileEditContainer";

import PropTypes from "prop-types";
import classNames from "classnames";

export default class ProfileEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    document.title = "meeTEAMate - Профиль";
  }

  render() {
    const {} = this.props;

    return (
      <div className="profile-edit-page">
        <Container>
          <ProfileEditContainer className="profile-page__profile" />
        </Container>
      </div>
    );
  }
}
