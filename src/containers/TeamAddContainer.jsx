import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createTeam } from "actions/actionsTeams";
import TeamEdit from "components/TeamEdit";

class TeamAddContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = { addTeam: PropTypes.func.isRequired };

  static defaultProps = {};

  handleSubmit = formdata => {
    const { addTeam } = this.props;
    console.log(formdata);
    addTeam(formdata);
  };

  render() {
    const {} = this.props;

    return (
      <Fragment>
        <TeamEdit onSubmit={this.handleSubmit} />
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
    ...props,
    addTeam: data => dispatch(createTeam(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamAddContainer);
