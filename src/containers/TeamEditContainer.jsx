import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getTeam,
  teamSuccsess,
  teamClear,
  updateTeam
} from "actions/actionsTeams";
import TeamEdit from "components/TeamEdit";

class TeamEditContainer extends PureComponent {
  static propTypes = {
    tid: PropTypes.number,
    id: PropTypes.number,
    teams: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    error: PropTypes.bool,
    updateTeam: PropTypes.func,
    getTeam: PropTypes.func,
    clearTeam: PropTypes.func,
    changeTeam: PropTypes.func
  };

  componentDidMount() {
    console.log("componentDidMouted");
    this.loadTeam();
  }

  componentWillUnmount() {
    console.log("componentDidUnmouted");
    const { clearTeam } = this.props;

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

  handleSubmit = formdata => {
    const { updateTeam, tid } = this.props;
    console.log(formdata);
    updateTeam({ formdata, tid });
  };

  render() {
    const { teams, id } = this.props;

    return teams[id] ? (
      <TeamEdit team={teams[id]} onSubmit={this.handleSubmit} />
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    ...state.team,
    teams: state.teams.items
  };
};

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getTeam: id => dispatch(getTeam(id)),
    changeTeam: id => dispatch(teamSuccsess(id)),
    updateTeam: id => dispatch(updateTeam(id)),
    teamClear: () => dispatch(teamClear())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamEditContainer);
