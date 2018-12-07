import "./Rules.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container } from "semantic-ui-react";

export default class Rules extends PureComponent {
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
        <div className="rules">
          <p>Страница для правил</p>
        </div>
      </Container>
    );
  }
}
