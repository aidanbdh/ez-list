import Auth0Lock from 'auth0-lock'

class AuthService {
  constructor(id = 'GL4oJ1GSV0r6lXAR9W56R3dEmQ3lRu55', url, ops) {
    this.lock = new Auth0Lock(id, url, ops)
    this.show = this.lock.show
  }
}

module.exports = new AuthService(process.env.AUTH0_CLIENTID, 'aidanbdh.auth0.com', { auth: { redirect: false } })
