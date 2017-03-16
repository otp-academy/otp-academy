// make sure to encrypt this in future to prevent man in the middle attacks

export const requestVersion = () => {
  return fetch('/api/version')
  .then(res => {
    return res.text()
  })
}

export const requestChampList = () => {
  return fetch('/api/champions')
  .then(res => {
    return res.json();
  })
  .then(res => {
    return JSON.parse(res).data;
  });
}