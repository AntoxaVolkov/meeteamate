import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "actions/actionsAuth";

import ProfileBar from "components/ProfileBar";

class ProfileBarContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    userId: PropTypes.number,
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func
  };

  static defaultProps = {};

  render() {
    const { userId, isAuthenticated, logout } = this.props;

    return (
      <ProfileBar
        userId={userId}
        logout={logout}
        isAuthenticated={isAuthenticated}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    userId: state.auth.userId,
    isAuthenticated: state.auth.isAuthenticated
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    logout: () => logout(dispatch)()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBarContainer);
