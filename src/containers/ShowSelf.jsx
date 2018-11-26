import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setRedirectPath } from "actions/actionsAuth";

class ShowSelf extends PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    aid: PropTypes.number,
    uid: PropTypes.number,
    children: PropTypes.any
  };

  render() {
    let { children, isAuthenticated, aid, uid } = this.props;

    return isAuthenticated && aid && uid && aid === uid ? children : "";
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    isAuthenticated: state.auth.isAuthenticated,
    aid: state.auth.userId
  };
};

export default connect(mapStateToProps)(ShowSelf);
