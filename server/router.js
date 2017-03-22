/* globals  __dirname */
const { Router } = require('express')
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || { database: 'ezlist' },
  ssl: true
})

const router = new Router()

router.get('/', (_, res) => res.status(200).send('index.html'))

router.post('/login', (req, res) => {
  knex('users')
    .where({ clientid: req.body.token })
    .then(response => {
      if (response[0]) {
        res.sendStatus(200)
      } else {
        knex('users')
          .insert({ clientid: req.body.token })
          .then(response => {
            res.sendStatus(201)
          })
      }
    })
})

module.exports = router
