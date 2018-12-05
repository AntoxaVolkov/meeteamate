import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTeams } from "actions/actionsTeams";
import TeamsList from "components/TeamsList";
import Pagination from "components/Pagination";

const LoadMore = () => <div />;

class TeamsListContainer extends PureComponent {
  //state = { page: 1 };

  static propTypes = {
    teams: PropTypes.array,
    limit: PropTypes.number,
    getListTeams: PropTypes.func,
    isFetching: PropTypes.bool
  };

  static defaultProps = {
    limit: 6
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadTeams = (page = 1) => {
    const { limit, getListTeams } = this.props;

    getListTeams({ page, limit });
  };

  loadMore = nextPage => {
    this.loadTeams(nextPage);
  };

  render() {
    const { teams, isFetching, limit } = this.props;
    return (
      <Fragment>
        <TeamsList limit={limit} teams={teams} />
        <Pagination />
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.teamsShown,
    teams: state.teamsShown.teams.map(teamId => state.teams.items[teamId])
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getListTeams: (page, limit) => dispatch(getTeams(page, limit))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsListContainer);
