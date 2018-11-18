import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { registration } from "actions/actionsRegister";
import RegisterForm from "components/RegisterForm";

class RegisterFormContainer extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isFetching: PropTypes.bool,
    errorField: PropTypes.object,
    isError: PropTypes.bool,
    registration: PropTypes.func
  };

  handleSubmit = userData => {
    this.props.registration(userData);
  };

  render() {
    const { className, isError, errorField, isFetching } = this.props;
    return (
      <RegisterForm
        className={className}
        onSubmit={this.handleSubmit}
        isError={isError}
        errorField={errorField}
        isFetching={isFetching}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    isFetching: state.register.isFetching,
    errorField: state.register.errorField,
    isError: state.register.didInvalidate
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    registration: userData => {
      registration(dispatch)(userData);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
