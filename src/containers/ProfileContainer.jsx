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
    uid: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  componentDidUpdate() {
    this.loadUser();
  }

  loadUser = () => {
    const { users, getUser, uid } = this.props;
    console.log(uid);
    if (uid && !users[uid]) {
      getUser(uid);
    }
  };

  render() {
    const { user, users, isFetching, uid, className } = this.props;

    const loader = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
    return !isFetching && users[uid] ? (
      <Profile className={className} self={user.id === uid} user={users[uid]} />
    ) : (
      loader
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.user,
    uid: ownProps.uid || state.auth.userId,
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
