// make sure to encrypt this in future to prevent man in the middle attacks

export const requestUserInfo = (userId) => {
  return fetch('/users/:'+userId)
  .then(res => {
    return res.text()
  })
}