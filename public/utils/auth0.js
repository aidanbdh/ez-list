import Auth0Lock from 'auth0-lock'

class AuthService {
  constructor(id = 'GL4oJ1GSV0r6lXAR9W56R3dEmQ3lRu55', url, ops) {
    this.lock = new Auth0Lock(id, url, ops)
    this.show = this.login.bind(this)
    this.authenticated = this.register.bind(this)
    this.registered = false
  }
  login() {
    this.lock.show()
  }
  register(func) {
    if (this.registered) return
    this.lock.on('authenticated', func)
    this.registered = true
  }
}

module.exports = new AuthService(process.env.AUTH0_CLIENTID, 'aidanbdh.auth0.com', { auth: { redirect: false } })
