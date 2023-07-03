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
        credentials: "include",
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(this._handleResponse)
  };

  getUserInfo() {
    return fetch(this.url + '/users/me', {
      credentials: "include",
      headers: this.headers
    })
      .then(this._handleResponse)

  };

  getTaskCards() {
    return fetch(this.url + '/cards', {
      credentials: "include",
      headers: this.headers
    })

      .then(this._handleResponse)
  }

  setUserInfo({ data }) {
    return fetch(this.url + '/users/me',
      {
        credentials: "include",
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
        credentials: "include",
        method: 'DELETE',
        headers: this.headers,
      }
    )
      .then(this._handleResponse)
  }

  pushLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      credentials: "include",
      method: 'PUT',
      headers: this.headers,

    })
      .then(this._handleResponse)
  }

  deleteLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      credentials: "include",
      method: 'DELETE',
      headers: this.headers,

    })
      .then(this._handleResponse)
  }
  pathTaskFromAvatar(avatar) {
    return fetch(this.url + '/users/me/avatar',
      {
        credentials: "include",
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

        credentials: "include",
        method: 'PUT',
        headers: this.headers,

      })
        .then((res) => this._handleResponse(res))
    }
    else {
      return fetch(this.url + '/cards/' + id + '/likes', {
        
        credentials: "include",
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
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${localStorage.getItem('jwt')}`
  }
});

