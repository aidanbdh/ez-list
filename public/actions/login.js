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
