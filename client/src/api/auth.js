// make sure to encrypt this in future to prevent man in the middle attacks
import { checkStatus } from './utils';

export const requestLogin = (loginInfo) => {
  return fetch('/auth/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(loginInfo)
  })
  .then(res => res.json())
  .then(checkStatus);
}

export const requestSignUp = (signUpInfo) => {
  return fetch('/auth/signup', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(signUpInfo)
  })
  .then(res => res.json())
  .then(checkStatus);
}

export const requestSession = () => {
  return fetch('/auth/session')
  .then(res => res.json())
  .then(checkStatus);
}