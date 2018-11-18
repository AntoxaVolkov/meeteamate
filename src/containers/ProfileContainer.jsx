import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getUser } from "actions/actionsUser";

/*************************
 * Пример контейнера
 */

class ProfileConteiner extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    getUser: PropTypes.func
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = (currentPage = 1) => {
    const { getUser } = this.props;

    getUser();
  };

  loadMore = nextPage => {
    this.loadUsers(nextPage);
  };

  render() {
    const { user } = this.props;

    return <Fragment />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.user
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
