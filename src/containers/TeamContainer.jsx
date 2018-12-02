import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Team from "components/Team";

class TeamContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  render() {
    const { className } = this.props;

    return <Team className={className} />;
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
)(TeamContainer);
