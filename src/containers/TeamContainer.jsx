import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTeam } from "actions/actionsTeams";
import Team from "components/Team";

class TeamContainer extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    teams: PropTypes.object,
    getTeam: PropTypes.func,
    isFetching: PropTypes.bool,
    tid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    currentUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    error: PropTypes.bool
  };

  componentDidMount() {
    console.log("componentDidMouted");
    this.loadTeam();
  }

  loadTeam = () => {
    let { teams, getTeam, tid, error } = this.props;
    if (tid && !error && !teams[tid]) {
      getTeam(tid);
    }
  };

  render() {
    const { tid, teams, className, currentUID } = this.props;
    return teams[tid] ? (
      <Team className={className} currentUID={currentUID} team={teams[tid]} />
    ) : (
      ""
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.team);
  return {
    ...ownProps,
    ...state.team,
    currentUID: state.auth.userId,
    isFetching: state.team.isFetching,
    error: state.team.didInvalidate,
    teams: state.teams.items
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getTeam: id => dispatch(getTeam(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamContainer);
