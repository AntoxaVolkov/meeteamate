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
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    isFetching: PropTypes.bool,
    logout: PropTypes.func
  };

  static defaultProps = {};

  render() {
    const { user, userId, isAuthenticated, isFetching, logout } = this.props;

    return (
      <ProfileBar
        userId={userId}
        user={user}
        isFetching={isFetching}
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
    user: state.users.items[state.auth.userId],
    isFetching: state.user.isFetching,
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
