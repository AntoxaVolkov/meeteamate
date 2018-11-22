import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";

import { getUser, updateUser } from "actions/actionsUser";
import ProfileEdit from "components/ProfileEdit";

class ProfileEditConteiner extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    users: PropTypes.object,
    getUser: PropTypes.func,
    isFetching: PropTypes.bool,
    updateUser: PropTypes.func,
    currentUserId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  componentDidMount() {
    this.loadUser();
  }

  handleSubmit = formdata => {
    const { updateUser } = this.props;
    console.log(formdata);
    updateUser(formdata);
  };

  loadUser = () => {
    const { getUser, users, currentUserId } = this.props;
    if (!users[currentUserId]) {
      getUser(currentUserId);
    }
  };

  render() {
    const { user, users, isFetching, currentUserId } = this.props;

    const loader = (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
    return !isFetching && user.id ? (
      <ProfileEdit user={users[currentUserId]} onSubmit={this.handleSubmit} />
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
    updateUser: data => dispatch(updateUser(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditConteiner);
