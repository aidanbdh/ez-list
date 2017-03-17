const { createStore, combineReducers } = require('redux')
const switchView = require('./reducers/view.js')
const handleLogin = require('./reducers/login.js')

const reducers = combineReducers({ switchView, handleLogin })

const store = createStore(reducers)

module.exports = store
