import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "actions/actionsAuth";
import { getUser } from "actions/actionsUser";

import ProfileBar from "components/ProfileBar";

class ProfileBarContainer extends PureComponent {
  componentDidUpdate() {
    const { user, uid, loadUser } = this.props;
    if (!user && uid) {
      loadUser(uid);
    }
  }

  static propTypes = {
    uid: PropTypes.number,
    loadUser: PropTypes.func,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool,
    isAuthenticating: PropTypes.bool,
    logout: PropTypes.func
  };

  static defaultProps = {};

  render() {
    const { user, isAuthenticated, isAuthenticating, logout } = this.props;
    return (
      <ProfileBar
        user={user}
        isAuthenticating={isAuthenticating}
        logout={logout}
        isAuthenticated={isAuthenticated}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.users.items);
  return {
    ...ownProps,
    uid: state.auth.userId,
    user: state.users.items[state.auth.userId],
    isAuthenticating: state.auth.isAuthenticating,
    isAuthenticated: state.auth.isAuthenticated
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    logout: () => logout(dispatch)(),
    loadUser: uid => dispatch(getUser(uid))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBarContainer);
