// make sure to encrypt this in future to prevent man in the middle attacks
import { baseFetchOptions } from './utils';

export const requestVersion = () => {
  return fetch('/api/version', {
    ...baseFetchOptions
  })
  .then(res => {
    return res.text()
  })
}

export const requestChampList = () => {
  return fetch('/api/champions', {
    ...baseFetchOptions
  })
  .then(res => {
    return res.json();
  })
  .then(res => {
    return JSON.parse(res).data;
  });
}