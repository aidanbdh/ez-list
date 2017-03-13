/* globals  __dirname */
const { Router } = require('express')
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || { database: 'ezlist-users' },
  ssl: true
})

const router = new Router()

router.get('/', (_, res) => res.status(200).send('index.html'))

module.exports = router
