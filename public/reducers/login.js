const init = require('../actions/init.js')

const handleLogin = (state = init, action) => {
  switch (action.type) {
    case 'updateProfile':
      return Object.assign({}, state, action)
    case 'loginError':
      return Object.assign({}, state, action)
    default:
      return state
  }
}

module.exports = handleLogin
