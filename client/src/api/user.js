// make sure to encrypt this in future to prevent man in the middle attacks

export const requestAddChamp = (userId, champion) => {
  return fetch('/users/'+userId+'/champions', {
  	headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  	method: 'PUT',
  	body: JSON.stringify(new Object({champion}))
  })
  .then(res => res.json())
}

export const requestDeleteChamp = (userId, champion) => {
  return fetch('/users/'+userId+'/champions', {
  	headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  	method: 'DELETE',
  	body: JSON.stringify(new Object({champion}))
  })
  .then(res => res.json())
}