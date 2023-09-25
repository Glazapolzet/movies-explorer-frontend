import { paths } from '../routes';

export const mainLink = {
  text: 'Главная',
  href: paths.main,
};

export const accountLink = {
  text: 'Аккаунт',
  href: paths.profile,
};

export const authLinks = {
  registration: {
    text: 'Регистрация',
    href: paths.signup,
  },
  login: {
    text: 'Войти',
    href: paths.signin,
  }
};

export const navigationLinks = [
  {
    text: 'Фильмы',
    href: paths.movies,
  },
  {
    text: 'Сохранённые фильмы',
    href: paths.savedMovies,
  }
];

export const footerLinks = [
  {
    text: 'Яндекс.Практикум',
    href: 'https://practicum.yandex.ru/',
  },
  {
    text: 'Github',
    href: 'https://github.com/Glazapolzet',
  },
];
