import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeNoty } from "actions/actionsNotifications";

import NotificationsList from "components/NotificationsList";
import { getNotifications } from "reducers/notifications";

class NotificationsContainer extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    notys: PropTypes.array,
    removeNoty: PropTypes.func
  };

  static defaultProps = {};

  handlerDismiss = id => {
    this.props.removeNoty({ id });
  };

  render() {
    const { className, notys } = this.props;
    return (
      <NotificationsList
        onDismiss={this.handlerDismiss}
        className={className}
        notys={notys}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    notys: getNotifications(state)
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    removeNoty: id => dispatch(removeNoty(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer);
