const init = require('../actions/init.js')

const inventory = (state = init, action) => {
  switch (action.type) {
    case 'getInventory':
      return Object.assign({}, state, { items: action.items })
    case 'addInventory':
      return Object.assign({}, state, { items: state.items.push(action.newItem) })
    default:
      return state
  }
}

module.exports = inventory
