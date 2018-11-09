import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loadListUsers } from "actions/actionsUsers";

/*************************
 * Пример контейнера
 */

const UsersList = () => <div />;
const LoadMore = () => <div />;

class UsersListContainer extends PureComponent {
  static propTypes = {
    limit: PropTypes.number,
    users: PropTypes.array,
    getListUsers: PropTypes.func,
    isLoading: PropTypes.bool,
    count: PropTypes.number,
    currentPage: PropTypes.number
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
    const { users, isLoading, limit, count, currentPage } = this.props;

    return (
      <Fragment>
        <UsersList limit={limit} users={users} />
        {isLoading && "Loading..."}
        {limit &&
        count &&
        count > limit &&
        currentPage < Math.ceil(count / limit) ? (
          <LoadMore currentPage={currentPage} onIncrement={this.loadMore} />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.users
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getListUsers: (limit, page) => dispatch(loadListUsers(limit, page))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersListContainer);
