const { lock } = require('../utils/auth0.js')

const login = token =>
  dispatch => {
    console.log('login')
    lock.getProfile(token, (err, profile) => {
      err
        ? dispatch({
          type: 'loginError',
          user: null,
          profile: null
        })
        : dispatch({
          type: 'updateProfile',
          user: token,
          profile
        })
    })
  }

const logout = () =>
  dispatch => {
    dispatch({
      type: 'updateProfile',
      user: null,
      profile: null
    })
  }

module.exports = { login, logout }
