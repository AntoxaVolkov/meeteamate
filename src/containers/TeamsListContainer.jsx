import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTeams, updatePage } from "actions/actionsTeams";
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
    updatePage: PropTypes.func,
    page: PropTypes.number,
    count: PropTypes.number
  };

  static defaultProps = {
    limit: 6
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadTeams = () => {
    const { limit, getListTeams, page } = this.props;

    getListTeams({ page, limit });
  };

  loadMore = page => {
    const { updatePage } = this.props;
    page = page.page;
    updatePage(page);
    this.loadTeams(page);
  };

  render() {
    const { teams, isFetching, limit, page, count } = this.props;
    let pages = Math.ceil(count / limit);
    return (
      <Fragment>
        <TeamsList limit={limit} teams={teams} />
        <Pagination page={page} loadMore={this.loadMore} pages={pages} />
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    ...state.teamsShown,
    ...state.team.page,
    teams: state.teamsShown.teams.map(teamId => state.teams.items[teamId]),
    page: state.team.page
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    updatePage: page => dispatch(updatePage(page)),
    getListTeams: (page, limit) => dispatch(getTeams(page, limit))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsListContainer);
