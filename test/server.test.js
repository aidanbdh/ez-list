/* globals describe it before after */
const { expect } = require('chai')
const request = require('request')
const app = require('../server/app.js')

describe('server', () => {

  let server

  before(done => {
    server = app.listen(3001, () => done())
  })

  after(() => {
    server.close()
  })

  describe('get /', () => {

    it('returns an html webpage', done => {
      request.get('http://localhost:3001', { json: true }, (err, res, body) => {
        expect(err).to.equal(null)
        expect(res.statusCode).to.equal(200)
        expect(body).to.not.equal(undefined)
        done()
      })
    })

  })

})
