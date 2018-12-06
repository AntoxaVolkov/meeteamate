import "./Faq.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container } from "semantic-ui-react";

export default class Faq extends PureComponent {
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
        <div className="faq">
          <p>Страница для вопросов</p>
        </div>
      </Container>
    );
  }
}
