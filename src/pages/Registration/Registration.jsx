import "./Registration.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Container } from "semantic-ui-react";

import RegistrationFormContainer from "containers/RegistrationFormContainer";
import Title from "components/Title";

export default class Registration extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <Container>
        <Title title={"регистрация нового пользователя"} />
        <RegistrationFormContainer />
      </Container>
    );
  }
}
