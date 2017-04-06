const init = require('../actions/init.js')

const inventory = (state = init, action) => {
  switch (action.type) {
    case 'getInventory':
      return Object.assign({}, state, { items: action.items })
    case 'addInventory':
      return Object.assign({}, state, { items: state.items.push(action.item) })
    case 'editInventory':
      return Object.assign({}, state, { items: state.items.splice(state.items.indexOf(action.oldItem), state.indexOf(action.oldItem) + 1) })
    case 'removeInventory':
      return Object.assign({}, state, { items: state.items.splice(state.items.indexOf(action.item), state.items.indexOf(action.item) + 1, action.item) })
    default:
      return state
  }
}

module.exports = inventory
