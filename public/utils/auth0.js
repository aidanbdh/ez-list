const Auth0Lock = require('auth0-lock')

module.exports = { lock: new Auth0Lock(process.env.AUTH0_CLIENTID || 'GL4oJ1GSV0r6lXAR9W56R3dEmQ3lRu55', 'aidanbdh.auth0.com') }
