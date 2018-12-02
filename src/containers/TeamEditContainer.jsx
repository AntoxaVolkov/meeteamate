import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TeamEdit from "components/TeamEdit";

class TeamEditContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;

    return (
      <Fragment>
        <TeamEdit />
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamEditContainer);
