import "./Home.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import HomeTopBlock from "components/HomeTopBlock";
import HomeBottomBlock from "components/HomeBottomBlock";

import createTeamImg from "images/create-teams.svg";
import findUsersImg from "images/find-users.svg";
import joinTeamImg from "images/join-team.svg";
import createDiscussionsImg from "images/create-discussions.svg";

export default class Home extends Component {
  componentDidMount() {
    document.title = "meeTEAMate";
  }

  render() {
    return (
      <div>
        <HomeTopBlock />
        <Container>
          <div className="home-page">
            <p className="home-page__text">
              Добро пожаловать на MEETEAMATE, портал позволяющий Вам создать
              команду как для игры в {"Дока 2"} и приготовления явств на
              празднование, так и для создания своего бизнеса и реализации идеи
              стартапа!
            </p>
            <h2 className="home-page__opportunities-title">Возможности</h2>

            <div className="home-page__opportunities">
              <div className="home-page__opportunitie">
                <h3>Создавайте команды</h3>
                <img src={createTeamImg} />
              </div>
              <div className="home-page__opportunitie">
                <h3>Находите товарищей</h3>
                <img src={findUsersImg} />
              </div>
              <div className="home-page__opportunitie">
                <h3>Вступайте в существующие команды</h3>
                <img src={joinTeamImg} />
              </div>
              <div className="home-page__opportunitie">
                <h3>Создавайте обсуждения внутри команды</h3>
                <img src={createDiscussionsImg} />
              </div>
            </div>

            <p className="home-page__text">Удачи в поисках!</p>
          </div>
        </Container>
        <HomeBottomBlock />
      </div>
    );
  }
}
