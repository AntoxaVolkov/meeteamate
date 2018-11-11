import "./Title.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Title extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const { title } = this.props;

    return <h3 className="title">{title}</h3>;
  }
}
