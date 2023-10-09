import { EXTERNAL_BASE_URL } from './config';

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка ${res.status}`);
  }

  return res.json();
}

export const getMovies = () => {
  return fetch(`${EXTERNAL_BASE_URL}`)
    .then((res) => getResponse(res))
}
