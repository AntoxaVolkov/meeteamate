import "./TeamsItem.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { confApi } from "configApp";

import Avatar from "components/Avatar";

export default class TeamsItem extends PureComponent {
  static propTypes = { team: PropTypes.object.isRequired };

  static defaultProps = {};

  render() {
    const { team } = this.props;

    let src = confApi.baseUrl + team.picture.thumb.url;

    return (
      <div className="teams-item">
        <div className="teams-item__avatar">
          <Avatar url={src} medium />
        </div>
        <div className="teams-item__info">
          <Link to={`/team/${team.id}`}>
            <p className="teams-item__name">{team.title}</p>
          </Link>
          <p className="teams-item__summary">{team.summary}</p>
        </div>
      </div>
    );
  }
}
