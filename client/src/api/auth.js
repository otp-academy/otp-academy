// make sure to encrypt this in future to prevent man in the middle attacks

export const requestLogin = (loginInfo) => {
  return fetch('/login', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(loginInfo)
  })
  .then(res => res.json())
}

export const requestSignUp = (signUpInfo) => {
  return fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(signUpInfo)
  })
  .then(res => res.json())
}

export const requestSession = () => {
  return fetch('/session')
  .then(res => res.json())
}