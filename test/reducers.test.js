/* globals describe it */
const { expect } = require('chai')
const switchView = require('../public/reducers/view.js')
const init = require('../public/actions/init.js')

describe('reducers', () => {

  describe('switchView', () => {

    it('should switch the active view', () => {
      const state = switchView(undefined, { type: null })
      expect(state).to.equal(init)
    })

  })

})
