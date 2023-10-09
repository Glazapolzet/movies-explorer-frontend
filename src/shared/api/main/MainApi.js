import { requestParams, BASE_URL } from './config';

async function getResponse(res) {
  const response = await res.json();

  if (!res.ok) {
    return Promise.reject({ [`status`]: res.status, ...response });
  }

  return response;
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
  })
    .then((res) => getResponse(res))
}

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    method: 'POST',
    headers: requestParams.headers,
    body: JSON.stringify(movie),
  })
    .then((res) => getResponse(res))
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    credentials: 'include',
    method: 'DELETE',
  })
    .then((res) => getResponse(res))
}

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
  })
    .then((res) => getResponse(res))
}

export const updateUser = (user) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: 'PATCH',
    headers: requestParams.headers,
    body: JSON.stringify(user),
  })
    .then((res) => getResponse(res))
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: requestParams.headers,
    body: JSON.stringify({
      name,
      email,
      password
    }),
  })
    .then((res) => getResponse(res))
}

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: requestParams.headers,
    body: JSON.stringify({
      email,
      password
    }),
  })
    .then((res) => getResponse(res))
}

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
  })
    .then((res) => getResponse(res))
}
