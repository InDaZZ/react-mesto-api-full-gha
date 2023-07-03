export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }
   
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log('Error(('))
  }

  postTask({ data }) {
    return fetch(this.url + '/cards',
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(this._handleResponse)
  };

  getUserInfo() {
    return fetch(this.url + '/users/me', {
      headers: this.headers
    })
      .then(this._handleResponse)

  };

  getTaskCards() {
    return fetch(this.url + '/cards', {
      headers: this.headers
    })

      .then(this._handleResponse)
  }

  setUserInfo({ data }) {
    return fetch(this.url + '/users/me',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(this._handleResponse)
  }

  deleteTask(id) {
    return fetch(this.url + '/cards/' + id,
      {
        method: 'DELETE',
        headers: this.headers,
      }
    )
      .then(this._handleResponse)
  }

  pushLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'PUT',
      headers: this.headers,

    })
      .then(this._handleResponse)
  }

  deleteLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'DELETE',
      headers: this.headers,

    })
      .then(this._handleResponse)
  }
  pathTaskFromAvatar(avatar) {
    return fetch(this.url + '/users/me/avatar',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ avatar })
      }
    )
      .then(this._handleResponse)
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(this.url + '/cards/' + id + '/likes', {
  
        method: 'PUT',
        headers: this.headers,
  
      })
        .then((res) => this._handleResponse(res))
    }
    else {
      return fetch(this.url + '/cards/' + id + '/likes', {
  
        method: 'DELETE',
        headers: this.headers,
  
      })
        .then((res) => this._handleResponse(res))
  }
  }

}




export const api = new Api({
  url: 'https://api.Mesto.Evgeny.D.nomoreparties.sbs',
  headers: {
    authorization: 'a5cc8f48-b1d5-4939-89bd-28066ec899ee',
    'Content-Type': 'application/json'
  }
});

  