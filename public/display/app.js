const React = require('react')
const { connect } = require('react-redux')
const Login = require('./views/login.js')
const Inventory = require('./views/inventory/inventory.js')

const viewElements = view => {
  switch (view) {
    case 'login':
      return <div>
          <Login/>
        </div>
    case 'home':
      return <div>
          <Login/>
          <Inventory/>
        </div>
    default:
      return <div>
          <Login/>
        </div>
  }
}

const App = ({ view }) => <div>{ viewElements(view) }</div>

const mapStateToProps = ({ view }) => ({ view: view.view })

module.exports = connect(mapStateToProps)(App)
