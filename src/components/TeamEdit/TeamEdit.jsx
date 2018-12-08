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
      summary: "",
      body: "",
      picture: ""
    };
  }

  static propTypes = {
    team: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
  };

  //static defaultProps = { team: false };

  componentDidMount() {
    const { team } = this.props;

    if (team) {
      let { title, summary, body } = team;
      this.setState({ title, summary, body });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const formdata = new FormData();
    Object.keys(this.state).forEach(key => {
      formdata.append(key, this.state[key]);
    });

    this.props.onSubmit(formdata);
  };

  handleChangeEmblem = file => {
    this.setState({ picture: file });
  };

  render() {
    //const {onSubmit} = this.props;
    let picture = this.props.team ? this.props.team.picture : null;
    console.log(picture);
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
                      name="summary"
                      value={this.state.summary}
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
                      name="body"
                      value={this.state.body}
                      onChange={this.handleChange}
                      className="team-edit-form__input"
                      placeholder="Дайте полное описание команды..."
                    />
                  </div>
                  <div className="team-edit-form__field">
                    <label className="team-edit-form__label">Тэги</label>
                    <Input
                      type="text"
                      name="tags"
                      className="team-edit-form__input"
                      placeholder="Введите тэги через пробел"
                    />
                  </div>
                </Form>
              </Grid.Column>
              <Grid.Column width={4}>
                <TeamEmblemEdit
                  picture={picture}
                  onChange={this.handleChangeEmblem}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="team-edit-form__field --center">
            <Button onClick={this.handleSubmit} primary>
              Сохранить
            </Button>
          </div>
        </Segment>
      </div>
    );
  }
}
