export const BASE_URL = 'https://api.vypz.diploma.nomoreparties.co';

export const requestParams = {
  headers: {
    "Content-Type": "application/json",
  }
}

export async function getResponse(res) {
  const response = await res.json();

  if (!res.ok) {
    return Promise.reject({ [`status`]: res.status, ...response });
  }

  return response;
}
