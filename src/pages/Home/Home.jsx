import "./Home.scss";

import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import HomeTopBlock from "components/HomeTopBlock";
import HomeBottomBlock from "components/HomeBottomBlock";

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeTopBlock />
        <Container>
          <p className="home-page__text">
            Добро пожаловать на MEETEAMATE, портал позволяющий Вам создать
            команду хоть для игры в {"Дока 2"} и приготовления явств на
            празднование, хоть для создания своего бизнеса и реализации идеи
            стартапа!
          </p>
          <h2 className="home-page__opportunities">возможности</h2>

          <div className="home-page__opportunitie">
            <p>Создавайте свои команды</p>
            <img
              src="../../../src/assets/images/main_create-team.jpg"
              alt="создание команды"
            />
          </div>

          <div className="home-page__opportunitie">
            <p>Для каждой цели своя команда</p>
            <img
              src="../../../src/assets/images/main_edit-team.jpg"
              alt="редактирование команд"
            />
          </div>

          <div className="home-page__opportunitie">
            <p>Принимай только тех, кого считаешь нужным</p>
            <img
              src="../../../src/assets/images/main_invites.jpg"
              alt="приём участников"
            />
          </div>

          <div className="home-page__opportunitie">
            <p>Или ищи кандидатов самостоятельно</p>
            <img
              src="../../../src/assets/images/main_search-members.jpg"
              alt="поиск участников"
            />
          </div>

          <div className="home-page__opportunitie">
            <p>Если управление не твоё, то ты можешь найти друга</p>
            <img
              src="../../../src/assets/images/main_user.jpg"
              alt="участник"
            />
          </div>

          <div className="home-page__opportunitie">
            <p>Или команду</p>
            <img
              src="../../../src/assets/images/main_search-teams.jpg"
              alt="команда"
            />
          </div>

          <div className="home-page__opportunitie">
            <p>Которая подходит именно тебе</p>
            <img
              src="../../../src/assets/images/main_team.jpg"
              alt="поиск участников"
            />
          </div>

          <p className="home-page__text">Удачи в поисках!</p>
        </Container>
        <HomeBottomBlock />
      </div>
    );
  }
}
