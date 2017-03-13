const { createStore, combineReducers } = require('redux')
const switchView = require('./reducers/view.js')

const reducers = combineReducers({ switchView })

const store = createStore(reducers)

module.exports = store
