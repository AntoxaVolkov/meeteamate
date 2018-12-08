import "./UserTeams.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Segment, Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";

import TeamCard from "components/TeamCard";

export default class UserTeams extends PureComponent {
  constructor(props) {
    super(props);
    this.zaglushka1 = {
      teams: [
        {
          title: "MEETEAMATE",
          summary:
            "Проект, в котором люди могут создавать свои команды и присоединяться к уже созданным, так как порой невозможно найти команду для соревнований в доте, команду, с которой вы вместе будете учиться программированию.",
          tags: ["IT", "программирование"]
        },
        {
          title: "команда 2",
          summary: "тут типа краткого описания для второй команды",
          tags: ["крэк", "пэкс"]
        },
        {
          title: "команда 3",
          summary: "тут типа краткого описания для третьей команды",
          tags: ["крэкс", "пэк"]
        },
        {
          title: "команда 4",
          summary: "тут типа краткого описания для четвёртой команды",
          tags: ["крэк", "пэк"]
        }
      ],
      count: 4
    };
    this.zaglushka2 = {
      teams: [
        {
          title: "команда 5",
          summary: "тут типа краткого описания для команды",
          tags: ["крэкс", "пэкс"]
        },
        {
          title: "команда 6",
          summary: "тут типа краткого описания для команды",
          tags: ["крэк", "пэкс"]
        },
        {
          title: "команда 7",
          summary: "тут типа краткого описания для команды",
          tags: ["крэкс", "пэк"]
        },
        {
          title: "команда 8",
          summary: "тут типа краткого описания для команды",
          tags: ["крэк", "пэк"]
        },
        {
          title: "команда 9",
          summary: "тут типа краткого описания для команды",
          tags: ["крэк", "пэк"]
        },
        {
          title: "команда 10",
          summary: "тут типа краткого описания для команды",
          tags: ["крэк", "пэк"]
        }
      ],
      count: 6
    };
    this.state = {
      showLeader: false,
      showLeaderTxt: "все",
      showMember: false,
      showMemberTxt: "все"
    };
  }

  static propTypes = {
    self: PropTypes.bool
  };

  static defaultProps = {};

  showAllLeader = () => {
    this.setState({ showLeader: !this.state.showLeader });
  };

  showAllMember = () => {
    this.setState({ showMember: !this.state.showMember });
  };

  render() {
    const { self } = this.props;

    const panes = [
      {
        menuItem: "Создатель",
        render: () => (
          <Tab.Pane attached={false} className="user-teams__team-list">
            {this.state.showLeader === true
              ? this.zaglushka1.teams.map((team, index) => {
                  return <TeamCard team={team} key={index} />;
                })
              : this.zaglushka1.teams.map((team, index) => {
                  if (index < 3) {
                    return <TeamCard team={team} key={index} />;
                  }
                })}
            <div
              className={
                this.zaglushka1.count > 3
                  ? "user-teams__show-all"
                  : "user-teams__show-all--hide"
              }
            >
              <hr />
              <p onClick={this.showAllLeader}>
                {this.zaglushka1.count > 3
                  ? `${this.state.showLeader ? "скрыть " : "все "}(${this
                      .zaglushka1.count - 3})`
                  : null}
              </p>
            </div>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Участник",
        render: () => (
          <Tab.Pane attached={false} className="user-teams__team-list">
            {this.state.showMember === true
              ? this.zaglushka2.teams.map((team, index) => {
                  return <TeamCard team={team} key={index} />;
                })
              : this.zaglushka2.teams.map((team, index) => {
                  if (index < 3) {
                    return <TeamCard team={team} key={index} />;
                  }
                })}
            <div
              className={
                this.zaglushka2.count > 3
                  ? "user-teams__show-all"
                  : "user-teams__show-all--hide"
              }
            >
              <hr />
              <p onClick={this.showAllMember}>
                {this.zaglushka2.count > 3
                  ? `${this.state.showMember ? "скрыть " : "все "}(${this
                      .zaglushka2.count - 3})`
                  : null}
              </p>
            </div>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className="user-teams">
        <Segment textAlign="center" className="user-teams__segment">
          <p className="user-teams__heading">Команды</p>
          {self ? (
            <Link
              className="nav-link ui positive button user-teams__create-team"
              to="/team/add"
            >
              Создать команду
            </Link>
          ) : null}
        </Segment>
        <Segment>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Segment>
      </div>
    );
  }
}
