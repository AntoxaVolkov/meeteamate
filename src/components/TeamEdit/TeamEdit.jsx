import "./TeamEdit.scss";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Container,
  Form,
  Input,
  Segment,
  Button,
  Grid
} from "semantic-ui-react";

import TeamEmblemEdit from "components/TeamEmblemEdit";

export default class TeamEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      short_description: "",
      full_description: "",
      tags: ""
    };
  }

  static propTypes = {};

  static defaultProps = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {} = this.props;

    return (
      <div className="team-edit">
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={12}>
                <Form className="team-edit-form">
                  <div className="team-edit-form__field">
                    <label className="team-edit-form__label">Название</label>
                    <Input
                      type="text"
                      value={this.state.title}
                      onChange={this.handleChange}
                      name="title"
                      className="team-edit-form__input"
                      placeholder="Название команды"
                    />
                  </div>
                  <div className="team-edit-form__field">
                    <label className="team-edit-form__label">
                      Краткое описание
                    </label>
                    <Form.TextArea
                      name="short_description"
                      value={this.state.short_description}
                      onChange={this.handleChange}
                      className="team-edit-form__input"
                      placeholder="Кратко опишите команду..."
                    />
                  </div>
                  <div className="team-edit-form__field">
                    <label className="team-edit-form__label">
                      Полное описание
                    </label>
                    <Form.TextArea
                      name="full_description"
                      value={this.state.full_description}
                      onChange={this.handleChange}
                      className="team-edit-form__input"
                      placeholder="Дайте полное описание команды..."
                    />
                  </div>
                  <div className="team-edit-form__field">
                    <label className="team-edit-form__label">Тэги</label>
                    <Input
                      type="text"
                      value={this.state.tags}
                      onChange={this.handleChange}
                      name="tags"
                      className="team-edit-form__input"
                      placeholder="Введите тэги через пробел"
                    />
                  </div>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <TeamEmblemEdit />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="team-edit-form__field --center">
            <Button primary>Сохранить</Button>
          </div>
        </Segment>
      </div>
    );
  }
}
