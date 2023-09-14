// export const BASE_URL = 'https://api.vypz.diploma.nomoreparties.co';
export const BASE_URL = 'http://localhost:3001';

export const requestParams = {
  headers: {
    "Content-Type": "application/json",
  }
}

export const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  return res.json();
}
