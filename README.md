# meeTEAMate

[TOC]

## NPM команды

+ `npm run dev` - запустить дев сборку.
+ `npm run build` - собрать production 
+ `make:comp NameComponent` - создать компонент с именем NameComponent
+ `make:cont Name` - создать контейнер с именем NameContainer
+ `make:pair NameComponent` - создать компонент с именем NameComponent и контейнер с именем NameComponentContainer
+ `make:page Name` - создать страницу с именем Name

## Для начала работы
1. Клонируем репозиторий
2. Ставим зависимости командой `npm install`
3. Настраиваем редактор кода для работы с *eslint * и *prettier*
Для VSC смотрите здесь https://anvilabs.co/blog/auto-formatting-javascript-with-prettier-and-eslint/

## Работа над проектом
Чтобы начать работать с проектом и вносить изменения, создайте отдельную ветку из ветки **develop**.

Если вы работаете над каким то новым функционалом то название ветки должно отражать этот функционал. Например вы создаете новый компонент то в названии ветки может отражаться название компонента. Или если вы работаете над комплексной задачей, например создание страницы регистрации, куда могут входить множество компонентов, то название может быть таким *registration-page*.

После завершения работы над новым функционалом, ваша ветка вливается в ветку **develop** (или предлагается Pull Request в эту ветку).

Если вы работаете над исправлением бага, то создать ветку можно от:  master, develop, в зависимости от того где обнаружен баг, и где его правильнее исправить (лучше заранее обсудить с командой). Ветка должна начинаться с префикса **hotfix-***.

Так же для нового релиза создается новая ветка из develop с префиксом release-\*, и затем вливается в **master** и **develop**. Релизу должен присваиваться тег с номером релиза.

Подробнее почитать о ведении репозитория можно здесь: https://m.habr.com/post/106912/

## Структура проекта

### Компоненты (папка components)
Компоненты создаются командой `make:comp NameComponent`. После выполнения команды в папке components создается папка NameComponent с тремя файлами: NameComponent.jsx, NameComponent.scss и index.js. 

#### Требования к компонентам
1. Каждый компонент должен быть максимально простым и отвечать за что то одно.
2. Компонент должен быть максимально тупым, в идеале не иметь своего state и выполнять чисто роль view.
3. ....в процессе 

### Контейнеры (папка containers)
Контейнеры создаются командой `make:cont Name`. После выполнения команды в папке containers создается файл с именем NameContainers.jsx

#### Требования к контейнерам
1.  ....в процессе.

> При необходимости создать одновременно компонент и контейнер можно воспользоваться командой  `make:pair NameComponent`, которая создает пару компонент - контейнер.

### Страницы (папка pages)
Страницы создаются командой `make:page NamePage`. После выполнения команды в папке pages создается папка NamePage с тремя файлами: NamePage.jsx, NamePage.scss и index.js. 

#### Требования к страницам
Страницы это те же компоненты, они создаются для роутинга. Страницы импортируются в файле routes.js и привязываются к путям.

```javascript
import Home from "pages/Home";
import Profile from "pages/Profile";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/profile",
    component: Profile,
    exact: true
  }
];

```
 ... в процессе

### Действия (папка actions)
Действия создаются в папке actions в ручную. Для этого нужно создать js файл в папке где сначало идет слово actions затем название например Users. Пример actionsUsers.js. (Не знаю как правильно писать, в множественном числе в единственном и тд. )

#### Требования к действиям
В файле действий могут содержаться как сами действия так и "побочные эфекты". "Побочные эффекты" - это асинхронные функции, которые могут например запрашивать данные по API. На каждый такой побочный эффект должны быть созданы как минимум три действия, это: 
+ действие *actionNameRequest* - которое говорит, что началась загрузка и ставит флаг isloading в соответствующем состоянии.
+ действие *actionNameSuccsess* - которое говорит, что загрузка закончилась успешно убирает флаг isloading в соответствующем состоянии и обновляет его новыми данными.
+ действие *actionNameFailure* - которое говорит, что загрузка закончилась провалом убирает флаг isloading и ставит флаг didInvalidate в соответствующем состоянии.

Пример:

```javascript
import { createAction } from "redux-actions";

import usersAPI from "api/users";

// Пример
export const loadListUsers = dispatch => (limit, currentPage) => {
  dispatch(loadUsersRequest()); // Говорим что загрузка пользователей началась
  usersAPI
    .getUsers(limit, currentPage)
    .then(res => {
      dispatch(loadUsersSuccsess(res)); // Говорим что загрузка пользователей завершилась успехом, и передаем список
    })
    .catch(error => {
      dispatch(loadUsersFailure(error)); // Говорим что загрузка пользователей завершилась неудачей, и передаем ошибку
    });
};

export const loadUsersRequest = createAction("[Users] Load  (request)");
export const loadUsersSuccsess = createAction("[Users] Load (succsess)");
export const loadUsersFailure = createAction("[Users] Load (failure)");

```

### Редукторы (папка reducers)
Редукторы создаются в папке reducers в ручную. Для этого нужно создать js файл в папке где сначало идет слово reducer затем название например Users. Пример reducerUsers.js. (Не знаю как правильно писать, в множественном числе в единственном и тд. )

#### Требования к действиям
В файле редуктора, если он обрабатывает действия "побочных эффектов", должны быть обработчики начала загрузки, ошибки при загрузке и успешной загрузки, а также состояние должно иметь соответствующие поля-флаги:  isloading и didInvalidate.

```javascript
import { handleActions } from "redux-actions";

import {
  loadUsersRequest,
  loadUsersSuccsess,
  loadUsersFailure
} from "actions/actionsUsers";

const initialState = {
  users: [],
  currentPage: 1,
  count: 0,
  isLoading: false,
  didInvalidate: false
};

export default handleActions(
  {
    [loadUsersRequest]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        didInvalidate: false
      };
    },
    [loadUsersSuccsess]: (state, action) => {
      let { currentPage } = action;
      let { users, count } = action.response;
      users =
        currentPage > state.currentPage ? state.users.concat(users) : users;
      return {
        ...state,
        users,
        count,
        currentPage,
        isLoading: false,
        didInvalidate: false
      };
    },
    [loadUsersFailure]: (state, action) => {
      return {
        ...state,
        didInvalidate: true
      };
    }
  },
  initialState
);

```

### API (папка api)
В данной папке создаются файлы API для сущностей. Например файл users.js в котором находиться объект usersAPI с методами getUsers(), getUsersByTeamId(), getUserById() и тд.

#### Требования к действиям
Методы должны возвращать промис.

### Посредники (папка middleware)
В данной папке будут файлы посредников, например для авторизации.

#### Требования к действиям
В процессе....

### Стили (папка scss)
В данной папке будут файлы стилей общие для всего приложения.
+ main.scss - главный файл, сюда импортируются остальные файлы папки пишутся общие стили, и тд.
+ _vars.scss - файл для scss переменных (пока переменные из этого файла могут использоваться только в файле main.scss и других файлах импортируемых в него после файла _vars.scss)
+ _libs.scss -файл для подключения стилей библиотек (сюда подключаем файлы стилей компонентов Semantic React UI Kit). Узнать для какого компонента какой стиль подключать можно здесь: https://github.com/Semantic-Org/Semantic-UI-CSS/tree/master/components . Стиль для компонента должен подключаться только один раз. 

#### Требования к стилям
Классы именуются по принципам БЭМ. Стиль:
**.block-name** - имя блока.
**.block-name--mod-name** - модификатор блока bool.
**.block-name--mod-name_mod-value** - модификатор блока со значением.
**.block-name__element-name** - название элемента.
**.block-name__element-name--mod-name** -  модификатор элемента bool.
**.block-name__element-name--mod-name_mod-value** - модификатор элемента со значением.
Блок в свою очередь может быть элементом другого блока, при этом родительский блок должен влиять только на позиционирование (расположение блока внутри себя), и не должен влиять на стиль дочернего блока.
https://ru.bem.info/methodology/css/
https://ru.bem.info/methodology/html/


## Технологии
+ Ruby rel
+ React + Redux + React-Router
+ Scss
+ Semantic UI React  https://react.semantic-ui.com
+ ESLint https://eslint.org/
+ Prettier https://prettier.io/
+ PostgresSQL
+ Webpack

