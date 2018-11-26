import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setRedirectPath } from "actions/actionsAuth";

class ShowUser extends PureComponent {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    children: PropTypes.any
  };

  render() {
    let { children, isAuthenticated } = this.props;

    return isAuthenticated ? children : "";
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(ShowUser);
