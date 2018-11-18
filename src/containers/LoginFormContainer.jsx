import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { login } from "actions/actionsAuth";
import { connect } from "react-redux";

import LoginForm from "components/LoginForm";

class LoginFormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    className: PropTypes.string,
    login: PropTypes.func,
    isAuthenticating: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    location: PropTypes.object,
    redirectPath: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  handleSubmit = formData => {
    this.props.login(formData);
  };

  render() {
    const {
      className,
      isAuthenticating,
      didInvalidate,
      location,
      isAuthenticated,
      redirectPath
    } = this.props;
    return (
      <LoginForm
        isAuthenticating={isAuthenticating}
        didInvalidate={didInvalidate}
        onSubmit={this.handleSubmit}
        className={className}
        location={location}
        isAuthenticated={isAuthenticated}
        redirectPath={redirectPath}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating,
    didInvalidate: state.auth.didInvalidate,
    redirectPath: state.auth.redirectPath
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    login: data => dispatch(login(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
