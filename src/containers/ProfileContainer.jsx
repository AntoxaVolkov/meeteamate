import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

import { getUser } from "actions/actionsUser";
import Profile from "components/Profile";

class ProfileConteiner extends Component {
  static propTypes = {
    className: PropTypes.string,
    users: PropTypes.object,
    getUser: PropTypes.func,
    isFetching: PropTypes.bool,
    uid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    selfId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    error: PropTypes.bool
  };

  componentDidMount() {
    console.log("componentDidMouted");
    this.loadUser();
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    let { users, getUser, uid, error, selfId } = this.props;
    if (uid !== prevProps.uid) this.loadUser();
  }

  loadUser = () => {
    let { users, getUser, uid, error, selfId } = this.props;
    uid = uid || selfId;
    if (uid && !error && !users[uid]) {
      getUser(uid);
    }
  };

  render() {
    let { users, isFetching, selfId, className, uid } = this.props;
    uid = uid || selfId;

    const loader = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
    return !isFetching && users[uid] ? (
      <Profile className={className} self={uid === selfId} user={users[uid]} />
    ) : (
      loader
    );
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
    getUser: id => dispatch(getUser(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileConteiner);
