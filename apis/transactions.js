'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
      {
        amount: 7.34,
        date: '2017-05-10',
        description: '7-11',
        category: 'Convenience'
      },
      {
        amount: 17.05,
        date: '2017-05-12',
        description: 'PDQ',
        category: 'Gas'
      }
  ])
})

module.exports = router
