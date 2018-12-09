import "./Login.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

import LoginFormContainer from "containers/LoginFormContainer";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = { location: PropTypes.object };

  static defaultProps = {};

  componentDidMount() {
    document.title = "meeTEAMate - Вход";
  }

  render() {
    const { location } = this.props;
    return (
      <div className="login-page">
        <Container>
          <LoginFormContainer
            location={location}
            className="login-page__login-form"
          />
        </Container>
      </div>
    );
  }
}
