import "./NotFound.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

export default class NotFound extends PureComponent {
  static propTypes = { location: PropTypes.object.isRequired };

  render() {
    const { location } = this.props;

    return (
      <div className="not-found">
        <Container>Страница {location.patcname} не найдена</Container>
      </div>
    );
  }
}
