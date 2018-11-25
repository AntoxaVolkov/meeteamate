import "./Avatar.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Avatar extends PureComponent {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string
  };
  render() {
    let { url, className } = this.props;
    const avatarClass = classNames("avatar", className);
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
