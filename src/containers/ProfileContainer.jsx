import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

import { getUser, userSuccsess, userClear } from "actions/actionsUser";
import { loadUsers } from "actions/actionsUsers";
import Profile from "components/Profile";

class ProfileConteiner extends Component {
  static propTypes = {
    className: PropTypes.string,
    users: PropTypes.object,
    getUser: PropTypes.func,
    changeUser: PropTypes.func,
    userClear: PropTypes.func,
    isFetching: PropTypes.bool,
    uid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    selfId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    error: PropTypes.bool
  };

  componentDidMount() {
    console.log("componentDidMouted");
    this.loadUser();
  }

  componentWillUnmount() {
    console.log("componentDidUnmouted");
    const { userClear } = this.props;

    userClear();
    //this.loadUser();
  }

  /*componentDidUpdate() {
    console.log("componentDidUpdate");
    this.loadUser();
  }*/

  loadUser = () => {
    let { users, getUser, uid, error, selfId, changeUser, id } = this.props;
    uid = uid || selfId;
    console.log("/////////////// load /////////////////");
    console.log(uid);
    console.log(this.props);
    console.log("////////////////////////////////");
    if (uid && !error && !users[uid]) {
      getUser(uid);
    } else if (uid && !error && users[uid] && id !== uid) {
      changeUser({ id: uid });
    }
  };

  render() {
    const { id, users, isFetching, selfId, className, uid } = this.props;

    console.log(id);

    const loader = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
    return !isFetching && users[id] ? (
      <Profile className={className} self={id === selfId} user={users[id]} />
    ) : (
      loader
    );
    return <div />;
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.user);
  return {
    ...ownProps,
    ...state.user,
    selfId: state.auth.userId,
    isFetching: state.user.isFetching,
    error: state.user.didInvalidate,
    users: state.users.items
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getUser: id => dispatch(getUser(id)),
    getUsers: () => dispatch(loadUsers()),
    changeUser: id => dispatch(userSuccsess(id)),
    userClear: () => dispatch(userClear())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileConteiner);
