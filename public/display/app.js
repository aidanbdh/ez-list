const React = require('react')
const { connect } = require('react-redux')
const Login = require('./views/login.js')

const viewElements = view => {
  switch (view) {
    case 'home':
      return <Login/>
    default:
      return <Login/>
  }
}

const App = view => <div>{ viewElements(view) }</div>

const mapStateToProps = ({ view }) => ({ view })

module.exports = connect(mapStateToProps)(App)