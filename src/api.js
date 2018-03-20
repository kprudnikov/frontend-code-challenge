// const baseUrl = 'https://api.mcmakler.de/v1';
const baseUrl = 'http://localhost:9000';

export function getAds() { // eslint-disable-line import/prefer-default-export
  return fetch(`${baseUrl}/advertisements`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => response.data);
}
