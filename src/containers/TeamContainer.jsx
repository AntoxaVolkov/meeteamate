import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getTeam,
  teamSuccsess,
  teamClear,
  getTeams
} from "actions/actionsTeams";
import Team from "components/Team";

class TeamContainer extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    teams: PropTypes.object,
    getTeam: PropTypes.func,
    changeTeam: PropTypes.func,
    teamClear: PropTypes.func,
    isFetching: PropTypes.bool,
    tid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    error: PropTypes.bool
  };

  componentDidMount() {
    console.log("componentDidMouted");
    this.loadTeam();
  }

  componentWillUnmount() {
    console.log("componentDidUnmouted");
    const { teamClear } = this.props;

    teamClear();
  }

  loadTeam = () => {
    let { teams, getTeam, tid, error, changeTeam, id } = this.props;
    console.log("/////////////// load /////////////////");
    console.log(tid);
    console.log(this.props);
    console.log("////////////////////////////////");
    if (tid && !error && !teams[tid]) {
      getTeam(tid);
    } else if (tid && !error && teams[tid] && id !== tid) {
      changeTeam({ id: tid });
    }
  };

  render() {
    const { id, teams, isFetching, className, tid } = this.props;

    console.log(id);

    return <Team className={className} team={teams[id]} />;
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.team);
  return {
    ...ownProps,
    ...state.team,
    isFetching: state.team.isFetching,
    error: state.team.didInvalidate,
    teams: state.teams.items
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getTeam: id => dispatch(getTeam(id)),
    loadTeams: () => dispatch(getTeams()),
    changeTeam: id => dispatch(teamSuccsess(id)),
    teamClear: () => dispatch(teamClear())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamContainer);
