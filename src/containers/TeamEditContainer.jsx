import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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
    currentUID: PropTypes.number,
    teams: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    error: PropTypes.bool,
    updateTeam: PropTypes.func,
    getTeam: PropTypes.func,
    clearTeam: PropTypes.func,
    changeTeam: PropTypes.func
  };

  componentDidMount() {
    console.log("componentDidMouted Edit");
    this.loadTeam();
  }

  componentDidupdate() {
    const { history, teams, id, currentUID } = this.props;
    console.log(id);
    if (teams[id] && currentUID !== teams[id]["user_id"]) history.push("/");
    if (!teams[id]) this.loadTeam();
  }

  componentWillUnmount() {
    console.log("componentDidUnmouted Edit");
    const { clearTeam } = this.props;

    //teamClear();
  }

  loadTeam = () => {
    let { teams, getTeam, tid, error, changeTeam, id } = this.props;
    console.log(id);
    if (tid && !error && !teams[tid]) {
      console.log("loading");
      getTeam(tid);
    } else if (tid && !error && teams[tid] && id !== tid) {
      console.log("chenge");
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
    console.log("jkhjkh jkhkj", id);
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
    teams: state.teams.items,
    currentUID: state.auth.userId
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
)(withRouter(TeamEditContainer));
