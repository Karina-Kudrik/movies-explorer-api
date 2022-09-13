const SERVER_ERROR = 500;
const NOT_FOUND = 404;
const BAD_REQUEST = 400;
const AUTH_ERROR = 401;
const CONFLICTING_REQUEST = 409;
const FORBIDDEN_ERROR = 403;

const WRONG_USER_INFO = 'Введены неверные данные для создания пользователя.';
const USER_NOT_FOUND = 'Пользователь с таким id не найден.';
const USER_EXIST = 'Пользователь с таким email уже существует.';
const WRONG_UPDATE_USER_INFO = 'Неверные данные для обновления информации о пользователе.';

const WRONG_MOVIE_INFO = 'ВВедены неверные данные для создания фильма.';
const MOVIE_NOT_FOUND = 'Фильм c указанным id не найден.';
const DELETE_FORBIDDEN = 'Вы можете удалять только свои фильмы.';
const WRONG_MOVIE_ID = 'Данные id некорректны';

const UNAUTHORIZED = 'Необходима авторизация.';
const WRONG_TOKEN = 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const WRONG_EMAIL_OR_PASSWORD = 'Неправильные почта или пароль';

const INVALID_URL = 'Поле заполнено некорректно. Введите url.';
const PAGE_NOT_FOUND = 'Страница не найдена.';

module.exports = {
  SERVER_ERROR,
  NOT_FOUND,
  BAD_REQUEST,
  AUTH_ERROR,
  CONFLICTING_REQUEST,
  FORBIDDEN_ERROR,
  WRONG_USER_INFO,
  USER_NOT_FOUND,
  USER_EXIST,
  WRONG_UPDATE_USER_INFO,
  WRONG_MOVIE_INFO,
  MOVIE_NOT_FOUND,
  DELETE_FORBIDDEN,
  WRONG_MOVIE_ID,
  UNAUTHORIZED,
  WRONG_TOKEN,
  WRONG_EMAIL_OR_PASSWORD,
  INVALID_URL,
  PAGE_NOT_FOUND,
};
