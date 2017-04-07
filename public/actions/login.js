const { lock } = require('../utils/auth0.js')

const login = token =>
  dispatch => {
    lock.getProfile(token, (err, user) => {
      err
        ? dispatch({
          type: 'loginError',
          user: null
        })
        : dispatch({
          type: 'updateProfile',
          user
        })
      if (err) return
      fetch('/login', {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email: user.email })
      })
        .then(() => {
          console.log('home')
          dispatch({
            type: 'switchView',
            view: 'home'
          })
        })
    })
  }

const logout = () =>
  dispatch => {
    dispatch({
      type: 'updateProfile',
      user: null
    })
  }

module.exports = { login, logout }
