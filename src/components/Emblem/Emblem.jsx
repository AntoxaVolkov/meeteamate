import "./Emblem.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Emblem extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    medium: PropTypes.bool,
    mini: PropTypes.bool
  };

  static defaultProps = {
    medium: false,
    mini: false
  };

  render() {
    let { url, className, medium, mini } = this.props;
    const emblemClass = classNames("emblem", className, {
      "--medium": medium,
      "--mini": mini
    });
    return (
      <div className={emblemClass}>
        <div
          className="emblem__img"
          style={{ backgroundImage: `url('${url}')` }}
        />
      </div>
    );
  }
}
