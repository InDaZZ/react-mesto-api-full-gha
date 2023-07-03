const BASE_URL = 'https://api.Mesto.Evgeny.D.nomoreparties.sbs';

function handleResponse(res) {

  if (res.ok) {
    return res.json()
  }

  return Promise.reject(console.log(`Error((: ${res.status}`))
}

export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: "include",
    headers: {
      
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(handleResponse)
}

export function authorize(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(handleResponse)
    
};

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(handleResponse)
}