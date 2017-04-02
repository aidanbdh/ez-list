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
    .where({ email: req.body.email })
    .then(response => {
      if (response[0]) {
        res.status(200).send(response[0])
      }
      else {
        knex('users')
          .insert({ email: req.body.email })
          .then(response => {
            res.status(201).send(req.body.email)
          })
      }
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/inventory', (req, res) => {
  knex('users')
    .where({ email: req.query.email })
    .select('id')
    .then(id => {
      knex('inventory')
        .where({ user: id[0] })
        .then(items => {
          res.status(200).send(items)
        })
    })
})

router.post('/inventory', (req, res) => {
  knex('users')
    .where({ email: req.body.email })
    .select('id')
    .then(id => {
      knex('inventory')
        .insert({
          user: id,
          name: req.body.name,
          price: req.body.price,
          location: req.body.location
        })
        .then(item => {
          res.status(201).send(item)
        })
    })
})

router.put('/inventory', (req, res) => {
  knex('users')
    .where({ email: req.body.email })
    .select('id')
    .then(id => {
      knex('inventory')
        .where(req.body.oldItem)
        .update(req.body.item)
        .then(() => {
          res.status(200).send(req.body.item)
        })
    })
})

router.delete('/inventory', (req, res) => {
  knex('users')
    .where({ email: req.body.email })
    .select('id')
    .then(id => {
      knex('inventory')
        .where(Object.assign(req.body.item, id))
        .del()
        .then(() => {
          res.status().send(req.body.item)
        })
    })
})

module.exports = router
