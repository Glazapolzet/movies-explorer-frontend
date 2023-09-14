import { getResponse, EXTERNAL_BASE_URL } from './config';

export const getMovies = () => {
  return fetch(`${EXTERNAL_BASE_URL}`)
    .then((res) => getResponse(res))
}
