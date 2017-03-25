const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router.js')

const app = express()
  .use(express.static(path.join(__dirname, '..', '/public')))
  .use(bodyParser.json())
  .use(router)

module.exports = app
