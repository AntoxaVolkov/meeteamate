import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { setRedirectPath } from "actions/actionsAuth";

export default function requireAuthentication(Component) {
  class ProtectingContainer extends PureComponent {
    checkAuth = () => {
      if (!this.props.isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.setRedirectPathAfterLogin(redirectAfterLogin);
        return false;
      }

      return true;
    };

    render() {
      return (
        <div>
          {this.checkAuth() === true && !this.props.isAuthenticating ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: `/login`,
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
      token: state.auth.token,
      userName: state.auth.userName,
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  function mapDispatchToProps(dispatch, props) {
    return {
      ...props,
      setRedirectPathAfterLogin: path => dispatch(setRedirectPath({ path }))
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProtectingContainer);
}
