import "./Avatar.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Avatar extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    mini: PropTypes.bool,
    medium: PropTypes.bool
  };

  static defaultProps = {
    mini: false,
    medium: false
  };

  render() {
    let { url, className, mini, medium } = this.props;
    const avatarClass = classNames("avatar", className, {
      "--mini": mini,
      "--medium": medium
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
