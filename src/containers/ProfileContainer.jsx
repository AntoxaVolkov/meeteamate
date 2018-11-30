import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

import { getUser } from "actions/actionsUser";
import { loadUsers } from "actions/actionsUsers";
import Profile from "components/Profile";

class ProfileConteiner extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    user: PropTypes.object,
    users: PropTypes.object,
    getUser: PropTypes.func,
    isFetching: PropTypes.bool,
    getUsers: PropTypes.func,
    currentUserId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    const { users, getUser, getUsers, currentUserId } = this.props;

    if (!users[currentUserId]) {
      getUser(currentUserId);
    }
  };

  render() {
    const { user, users, isFetching, currentUserId, className } = this.props;

    const loader = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
    return !isFetching && users[currentUserId] ? (
      <Profile
        className={className}
        self={user.id === currentUserId}
        user={users[currentUserId]}
      />
    ) : (
      loader
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.user,
    currentUserId: state.auth.userId,
    isFetching: state.user.isFetching,
    users: state.users.items,
    user: state.user
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getUser: id => dispatch(getUser(id)),
    getUsers: () => dispatch(loadUsers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileConteiner);
