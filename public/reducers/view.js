const init = require('../actions/init.js')

const view = (state = init, action) => {
  switch (action.type) {
    case 'switchView':
      return Object.assign({}, state, { view: action.view })
    default:
      return state
  }
}

module.exports = view
