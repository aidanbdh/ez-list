const lock = require('../utils/auth0.js')

//
const Login = token =>
  dispatch => lock.getProfile(token, (err, profile) => {
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

//
const Logout = dispatch =>
  dispatch({
    type: 'updateProfile',
    user: null,
    profile: null
  })

module.exports = { Login, Logout }
