import "./Avatar.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Avatar extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    mini: PropTypes.bool
  };

  static defaultProps = {
    mini: false
  };

  render() {
    let { url, className, mini } = this.props;
    const avatarClass = classNames("avatar", className, {
      "--mini": mini
    });
    return (
      <div className={avatarClass}>
        <div
          className="avatar__img"
          style={{ backgroundImage: `url('${url}')` }}
        />
      </div>
    );
  }
}
