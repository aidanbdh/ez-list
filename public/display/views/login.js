const React = require('react')
const { connect } = require('react-redux')
const { lock, show } = require('../../utils/auth0.js')
console.log(lock)
const { login, logout } = require('../../actions/login.js')

const Login = ({ login, logout }, { user }) => {
  lock.on('authenticated', res => login(res.idToken))
  return <div>
    {
     user
      ? <button onClick={ logout }>Logout</button>
      : <button onClick={ show }>Login</button>
    }
  </div>
}

const mapDispatchToProps = dispatch => ({
  login: id => {
    dispatch(login(id))
  },
  logout: dispatch(logout())
})

const mapStateToProps = ({ user }) => ({ user })

module.exports = connect(mapStateToProps, mapDispatchToProps)(Login)
