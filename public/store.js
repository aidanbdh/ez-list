const { createStore, combineReducers, applyMiddleware } = require('redux')
const reduxThunk = require('redux-thunk').default
const view = require('./reducers/view.js')
const profile = require('./reducers/profile.js')
const inventory = require('./reducers/inventory.js')

const reducers = combineReducers({view, profile, inventory})

const store = createStore(reducers, applyMiddleware(reduxThunk))

module.exports = store
