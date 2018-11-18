import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { setRedirectPath } from "actions/actionsAuth";

export default function guestOnly(Component) {
  class GuestOnlyContainer extends PureComponent {
    render() {
      let { isAuthenticated } = this.props;
      return (
        <div>
          {!isAuthenticated ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: `/profile`,
                state: { from: this.props.location }
              }}
            />
          )}
        </div>
      );
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(mapStateToProps)(GuestOnlyContainer);
}
