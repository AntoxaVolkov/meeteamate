import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loadUsers } from "actions/actionsUsers";
import UsersList from "components/UsersList";

const LoadMore = () => <div />;

class UsersListContainer extends PureComponent {
  //state = { page: 1 };

  static propTypes = {
    users: PropTypes.array,
    limit: PropTypes.number,
    getListUsers: PropTypes.func,
    isFetching: PropTypes.bool
  };

  static defaultProps = {
    limit: 6
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = (currentPage = 1) => {
    const { limit, getListUsers } = this.props;

    getListUsers(limit, currentPage);
  };

  loadMore = nextPage => {
    this.loadUsers(nextPage);
  };

  render() {
    const { users, isFetching, limit } = this.props;
    return (
      <Fragment>
        <UsersList limit={limit} users={users} />
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.usersShown,
    users: state.usersShown.users.map(userId => state.users.items[userId])
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getListUsers: page => dispatch(loadUsers(page))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
