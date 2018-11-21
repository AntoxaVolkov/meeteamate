import "./HomeBottomBlock.scss";

import React, { PureComponent } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import classNames from "classnames";

import RegisterFormContainer from "containers/RegisterFormContainer";

export default class HomeBottomBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <div className="home-bottom-block">
        <Container>
          <p className="home-bottom-block__call">
            Присоединяйтесь к<br />
            MEETEAMATE
            <br />
            прямо сейчас!
          </p>
          <RegisterFormContainer />
        </Container>
      </div>
    );
  }
}
