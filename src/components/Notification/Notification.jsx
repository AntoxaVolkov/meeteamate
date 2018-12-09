import "./Notification.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Message } from "semantic-ui-react";

export default class Notification extends PureComponent {
  state = { timeoutId: null, open: false };
  static propTypes = {
    onDismiss: PropTypes.func.isRequired,
    noty: PropTypes.object.isRequired
  };

  componentDidMount() {
    let timeoutId = setTimeout(() => {
      this.props.onDismiss(this.props.noty.id);
    }, 5000);

    this.setState({ timeoutId, open: true });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
    this.setState({ open: false });
  }

  handleDismiss = () => {
    this.props.onDismiss(this.props.noty.id);
  };

  render() {
    let { noty } = this.props;

    const classMessage = classNames("noty__item", {
      success: noty.type === "success",
      warning: noty.type === "warning",
      info: noty.type === "info",
      negative: noty.type === "error"
    });

    return (
      <div className="noty">
        <Message
          onDismiss={this.handleDismiss}
          className={classMessage}
          floating
          header={noty.title || ""}
          content={noty.msg || ""}
          size="mini"
        />
      </div>
    );
  }
}
