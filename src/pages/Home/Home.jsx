import "./Home.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import HomeTopBlock from "components/HomeTopBlock";
import HomeBottomBlock from "components/HomeBottomBlock";

export default class Home extends Component {
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
            <h2 className="home-page__opportunities-title">возможности</h2>

            <div className="home-page__opportunities">
              <div className="home-page__opportunitie">
                <h3>Создавайте команды</h3>
                <img src="../../src/assets/images/create-teams.svg" />
              </div>
              <div className="home-page__opportunitie">
                <h3>Находите товарищей</h3>
                <img src="../../src/assets/images/find-users.svg" />
              </div>
              <div className="home-page__opportunitie">
                <h3>Вступайте в существующие команды</h3>
                <img src="../../src/assets/images/join-team.svg" />
              </div>
              <div className="home-page__opportunitie">
                <h3>Создавайте обсуждения внутри команды</h3>
                <img src="../../src/assets/images/create-discussions.svg" />
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
