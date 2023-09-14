export const EXTERNAL_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const requestParams = {
  headers: {
    "Content-Type": "application/json",
  }
}

export const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка ${res.status}`);
  }

  return res.json();
}
