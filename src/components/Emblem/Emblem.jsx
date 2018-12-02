import "./Emblem.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Emblem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  render() {
    let { className } = this.props;
    const emblemClass = classNames("emblem", className);

    return (
      <div className={emblemClass}>
        <div className="emblem__img" />
      </div>
    );
  }
}
