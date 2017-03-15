const React = require('react')
const Hello = require('./views/hello.js')
const Login = require('./views/login.js')

const App = () =>
  <div>
    <Login/>
    <Hello/>
  </div>

module.exports = App
