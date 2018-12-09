import "./NotificationsList.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Notification from "components/Notification";

export default class NotificationsList extends PureComponent {
  static propTypes = {
    notys: PropTypes.array.isRequired,
    className: PropTypes.string,
    onDismiss: PropTypes.func
  };

  static defaultProps = { className: "" };

  render() {
    let { className, onDismiss, notys } = this.props;

    const classNoty = classNames("noty-list", className);
    return (
      <div className={classNoty}>
        {notys.map(item => (
          <Notification onDismiss={onDismiss} key="item.id" noty={item} />
        ))}
      </div>
    );
  }
}
