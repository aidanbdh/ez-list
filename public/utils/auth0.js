const Auth0Lock = require('auth0-lock')

module.exports = { lock: new Auth0Lock(process.env.AUTH0_CLIENTID, 'aidanbdh.auth0.com') }
