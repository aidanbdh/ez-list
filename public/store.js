const { createStore, combineReducers, applyMiddleware } = require('redux')
const reduxThunk = require('redux-thunk').default
const switchView = require('./reducers/view.js')
const handleLogin = require('./reducers/login.js')

const reducers = combineReducers({switchView, handleLogin})

const store = createStore(reducers, applyMiddleware(reduxThunk))

module.exports = store
