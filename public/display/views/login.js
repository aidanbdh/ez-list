const React = require('react')
const { connect } = require('react-redux')
const { show, authenticated } = require('../../utils/auth0.js')
const { login, logout } = require('../../actions/login.js')

const Login = ({ user, dispatchLogin, dispatchLogout }) => {
  authenticated(res => dispatchLogin(res.idToken))
  const display =
    user
      ? {
        name: ` ${user.name || ''}`,
        button: 'Logout',
        func: dispatchLogout
      }
      : {
        name: '',
        button: 'Login',
        func: show
      }
  return <div id='login'>
    <h3>Hello{ display.name }!</h3>
    <button onClick={ display.func }>{ display.button }</button>
  </div>
}

const mapDispatchToProps = dispatch => ({
  dispatchLogin: id => {
    dispatch(login(id))
  },
  dispatchLogout: () => {
    dispatch(logout())
  }
})

const mapStateToProps = ({ profile }) => ({ user: profile.user || null })

module.exports = connect(mapStateToProps, mapDispatchToProps)(Login)
