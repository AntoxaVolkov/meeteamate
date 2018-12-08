import "./UserTeams.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Segment, Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class UserTeams extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const {} = this.props;
    const panes = [
      {
        menuItem: "Создатель",
        render: () => (
          <Tab.Pane attached={false}>
            Тут команды, в которых данный пользователь является тимлидом
          </Tab.Pane>
        )
      },
      {
        menuItem: "Участник",
        render: () => (
          <Tab.Pane attached={false}>
            Тут команды, в которых данный пользователь является участником
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="user-teams">
        <Segment textAlign="center" className="user-teams__segment">
          <p className="user-teams__heading">Команды</p>
          <Link
            className="nav-link ui positive button user-teams__create-team"
            to="/team/add"
          >
            Создать команду
          </Link>
        </Segment>
        <Segment>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Segment>
      </div>
    );
  }
}
