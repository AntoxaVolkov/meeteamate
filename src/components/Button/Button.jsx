import "./Button.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    action: PropTypes.func,
    title: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const { action, title } = this.props;

    return (
      <button className="button" onClick={action}>
        {title}
      </button>
    );
  }
}
