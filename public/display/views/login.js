const React = require('react')
const { connect } = require('react-redux')
const lock = require('../../utils/auth0.js')
const { login, logout } = require('../../actions/login.js')

console.log(lock)

const Login = (dispatch, { user }) =>
  <div>
    { lock.on('authenticated', res => dispatch(login(res.idToken))) }
    {
     user
      ? <button onClick={ lock.show() }>Login</button>
      : <button onClick={ dispatch(logout) }>Logout</button>
    }
  </div>

const mapDispatchToProps = dispatch => dispatch

const mapStateToProps = ({ user }) => ({ user })

module.exports = connect(mapDispatchToProps, mapStateToProps)(Login)
