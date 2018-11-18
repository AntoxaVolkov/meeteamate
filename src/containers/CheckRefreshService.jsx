import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reLogin } from "actions/actionsAuth";

class CheckRefreshService extends PureComponent {
  static propTypes = {
    userId: PropTypes.number,
    isAuthenticated: PropTypes.bool,
    refresh: PropTypes.func
  };

  componentDidMount() {
    let { refresh, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      refresh();
    }
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    userId: state.auth.userId,
    isAuthenticated: state.auth.isAuthenticated
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    refresh: () => reLogin(dispatch)()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckRefreshService);
