import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loadUsers } from "actions/actionsUsers";
import { getUsersList } from "reducers/usersShown";
import UsersList from "components/UsersList";
import Pagination from "components/Pagination";

class UsersListContainer extends PureComponent {
  //state = { page: 1 };

  static propTypes = {
    users: PropTypes.array,
    limit: PropTypes.number,
    getListUsers: PropTypes.func,
    isFetching: PropTypes.bool,
    count: PropTypes.number,
    page: PropTypes.number
  };

  static defaultProps = {
    limit: 6,
    page: 1
  };

  componentDidMount() {
    this.loadUsers(this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      console.log("loadUsers");
      this.loadUsers(this.props.page);
    }
  }

  loadUsers = page => {
    const { limit, getListUsers } = this.props;
    getListUsers({ page, limit });
  };

  render() {
    const { users, isFetching, limit, count, page } = this.props;

    return (
      <Fragment>
        <UsersList isFetching={isFetching} users={users} />
        <Pagination
          pagPath="/search/users"
          pages={Math.ceil(count / limit)}
          page={page}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.usersShown,
    users: getUsersList(state)
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
