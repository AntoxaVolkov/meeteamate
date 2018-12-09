import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTeams } from "actions/actionsTeams";
import TeamsList from "components/TeamsList";
import Pagination from "components/Pagination";

class TeamsListContainer extends PureComponent {
  //state = { page: 1 };

  static propTypes = {
    teams: PropTypes.array,
    limit: PropTypes.number,
    getListTeams: PropTypes.func,
    isFetching: PropTypes.bool,
    count: PropTypes.number,
    page: PropTypes.number
  };

  static defaultProps = {
    limit: 6,
    page: 1
  };

  componentDidMount() {
    this.loadTeams(this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.loadTeams(this.props.page);
    }
  }

  loadTeams = page => {
    const { limit, getListTeams } = this.props;
    getListTeams({ page, limit });
  };

  render() {
    const { teams, isFetching, limit, count, page } = this.props;
    return (
      <Fragment>
        <TeamsList isFetching={isFetching} teams={teams} />
        <Pagination
          pagPath="/search/teams"
          pages={Math.ceil(count / limit)}
          page={page}
        />
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
