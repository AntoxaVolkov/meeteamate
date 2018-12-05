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
    isFetching: PropTypes.bool,
    count: PropTypes.number,
    page: PropTypes.number
  };

  static defaultProps = {
    limit: 6
  };

  componentDidMount() {
    this.loadTeams(this.props.page);
  }

  loadTeams = () => {
    const { limit, getListTeams, page } = this.props;
    getListTeams({ page, limit });
  };
  /*
  loadMore = () => {
    this.loadTeams();
  };
*/
  render() {
    const { teams, isFetching, limit, count, page } = this.props;
    return (
      <Fragment>
        <TeamsList limit={limit} teams={teams} />
        <Pagination
          pages={Math.ceil(count / limit)}
          page={page}
          onClick={this.loadTeams}
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
