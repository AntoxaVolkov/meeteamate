import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { getTeam, updateTeam } from "actions/actionsTeams";
import TeamEdit from "components/TeamEdit";
import PageLoader from "components/PageLoader";

class TeamEditContainer extends PureComponent {
  static propTypes = {
    tid: PropTypes.number,
    currentUID: PropTypes.number,
    teams: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    error: PropTypes.bool,
    updateTeam: PropTypes.func,
    getTeam: PropTypes.func
  };

  componentDidMount() {
    this.loadTeam();
  }

  componentDidupdate() {
    const { history, teams, tid, currentUID } = this.props;
    if (teams[tid] && currentUID !== teams[tid]["user_id"]) history.push("/");
    if (!teams[tid]) this.loadTeam();
  }

  loadTeam = () => {
    let { teams, getTeam, tid, error } = this.props;
    if (tid && !error && !teams[tid]) {
      getTeam(tid);
    }
  };

  handleSubmit = formdata => {
    const { updateTeam, tid } = this.props;
    updateTeam({ formdata, tid });
  };

  render() {
    const { teams, tid, isFetching } = this.props;
    return teams[tid] ? (
      <TeamEdit
        isFetching={isFetching}
        team={teams[tid]}
        onSubmit={this.handleSubmit}
      />
    ) : (
      <PageLoader active />
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
    updateTeam: id => dispatch(updateTeam(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TeamEditContainer));
