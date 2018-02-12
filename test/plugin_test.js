'use strict'

const { expect } = require('chai')
const Plugin = require('..')

describe('Plugin', () => {
  it('config defaults', () => {
    const plugin = new Plugin()
    expect(plugin.config.ignoreErrors).to.be.true
  })
})
