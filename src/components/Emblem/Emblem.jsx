import "./Emblem.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Emblem extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    let { url, className } = this.props;
    const emblemClass = classNames("emblem", className);
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
